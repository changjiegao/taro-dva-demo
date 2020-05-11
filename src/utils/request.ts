import Taro, { Component } from '@tarojs/taro'
import {
  ISMOCK,
  MAINHOST,
  LOGINHOST
} from '../config'
import {
  commonParame,
  requestConfig
} from '../config/requestConfig'
import Tips from './tips'

// import { createLogger } from './logger'

declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
declare type Headers = { [key: string]: string };
declare type Datas = { method: Methods;[key: string]: any; };
interface Options {
  url: string;
  host?: string;
  method?: Methods;
  data?: Datas;
  header?: Headers;
}

export class Request {
  //登陆的promise
  static loginReadyPromise: Promise<any> = Promise.resolve()
  // 正在登陆
  static isLogining: boolean = false
  // 导出的api对象
  static apiLists: { [key: string]: () => any; } = {}
  // token
  static token: string = ''

  // constructor(setting) {

  // }

  static UUID() {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  };

  /**
   * @static 处理options
   * @param {Options | string} opts
   * @param {Datas} data
   * @returns {Options}
   * @memberof Request
   */
  static conbineOptions(opts, data: Datas, method: Methods): Options {
    let charset = 'utf8';
    let requestId = this.UUID();
    let contentType = 'application/json; charset=utf-8';
    const loginInfo = Taro.getStorageSync('loginInfo');
    let authorization = loginInfo.session;
    let header = {
      'Platform': 'wechat',
      'Profile':'test4',
      'Charset':charset,
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'request-id':requestId,
      // 'APPID': 'APPwxbd3e6f9c3b2c9a33',
      'Authorization': authorization
    };
    typeof opts === 'string' && (opts = { url: opts })
    return {
      data: { ...commonParame, ...opts.data, ...data },
      method: opts.method || data.method || method || 'GET',
      url: `${opts.host || MAINHOST}${opts.url}`,
      header: header
    }
  }

  static getToken() {
    !this.token && (this.token = Taro.getStorageSync('token'))
    return this.token
  }

  /**
   *
   * @static request请求 基于 Taro.request
   * @param {Options} opts
   */
  static async request(opts: Options) {
    // token不存在
    // if (!this.getToken()) { await this.login() }

    // token存在
    // let options = Object.assign(opts, { header: { 'token': this.getToken() } })

    let options = Object.assign(opts);

    //  Taro.request 请求
    const res = await Taro.request(opts)
    console.log('Taro.requestres', res);

    // 是否mock
    if (ISMOCK) { return res.data }

    // 登陆失效
    if (!res.data) { await this.login(); return this.request(opts) }

    // 请求成功
    // if (res.data && res.data.code === 0 || res.data.succ === 0) { return res.data }
    if (res.data) { return res.data }


    // 请求错误
    const d = { ...res.data, err: (res.data && res.data.msg) || `网络错误～` }
    Tips.toast(d.err);
    throw new Error(d.err)
  }

  /**
   *
   * @static 登陆
   * @returns  promise
   * @memberof Request
   */
  static login() {
    console.log('login isLogining:', this.isLogining);
    if (!this.isLogining) { this.loginReadyPromise = this.onLogining() }
    return this.loginReadyPromise
  }

  /**
   *
   * @static 登陆的具体方法
   * @returns
   * @memberof Request
   */
  static onLogining() {
    this.isLogining = true
    return new Promise(async (resolve, reject) => {
      // 获取code
      const { code } = await Taro.login()
      console.log('onLogining code', code);
      // 请求登录
      const {data}  = await Taro.request({
        url: `${LOGINHOST}${requestConfig.loginUrl}`,
        data: { code: code }
      })
      console.log('Taro.request data', data);

      if (!data.data || !data.data.token) {
        reject()
        return
      }

      // Taro.setStorageSync('token', res.data.token)
      Taro.setStorageSync('loginInfo', data.data)
      this.isLogining = false
      resolve()
    })
  }

  /**
   *
   * @static  创建请求函数
   * @param {(Options | string)} opts
   * @returns
   * @memberof Request
   */
  static creatRequests(opts: Options | string): () => {} {
    return async (data = {}, method: Methods = "GET") => {
      if (!Taro.getStorageSync('token')) {
        await this.login();
      }
      const _opts = this.conbineOptions(opts, data, method)
      const res = await this.request(_opts)
      // createLogger({ title: 'request', req: _opts, res: res })
      return res
    }
  }

  /**
   *
   * @static 抛出整个项目的api方法
   * @returns
   * @memberof Request
   */
  static getApiList(requestConfig) {
    console.log('getApiList requestConfig', requestConfig);
    console.log('getApiList Object', Object);
    if (!Object.keys(requestConfig).length) return {}


    Object.keys(requestConfig).forEach((key) => {
      this.apiLists[key] = this.creatRequests(requestConfig[key])
    })
    console.log('getApiList apiLists', this.apiLists);
    return this.apiLists
  }
}

// 导出
const Api = Request.getApiList(requestConfig)
Component.prototype.$api = Api
export default Api as any
