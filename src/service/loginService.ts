import Taro from "@tarojs/taro";
import {LOGINHOST} from "../config";
import {requestConfig} from "../config/requestConfig";

class LoginService {
  //登陆的promise
  loginReadyPromise: Promise<any>;
  // 正在登陆
  isLogining: boolean;
  // token
  token: string = ''
  constructor(){
    this.isLogining = false;
    this.loginReadyPromise = Promise.resolve();
  }


  /**
   *
   * @static 登陆的具体方法
   * @returns
   * @memberof Request
   */
  onLogining() {
    this.isLogining = true;
    return new Promise(async (resolve, reject) => {
      // 获取code
      const { code } = await Taro.login()
      console.log('onLogining code', code);
      console.log(`url: ${LOGINHOST}${requestConfig.loginUrl}`);
      // 请求登录
      const { data } = await Taro.request({
        url: `${LOGINHOST}${requestConfig.loginUrl}`,
        data: { code: code }
      })

      if (!data.data || !data.data.token) {
        reject()
        return
      }

      Taro.setStorageSync('loginInfo', data.data)
      this.isLogining = false
      resolve()
    })
  }
  /**
   *
   * @static 登陆
   * @returns  promise
   * @memberof Request
   */
  login() {
    if (!this.isLogining) { this.loginReadyPromise = this.onLogining() }
    return this.loginReadyPromise
  }

}

export default new LoginService();
