import {
  LOGINHOST
} from './index'

import index from '../pages/index/config' // index接口
import mine from '../pages/mine/config' //“我的”接口
/**
 * 请求的公共参数
 */
export const commonParame = {}

/**
 * 请求映射文件
 */
export const requestConfig = {
  loginUrl: '/oauth3/miniapp/login2', // 微信登录接口
  isLogin: {
    host: LOGINHOST,
    url: '/oauth3/miniapp/isLogin'
  },
  ...index,
  ...mine
}
