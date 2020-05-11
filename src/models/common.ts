import Api from '../utils/request'
import Taro from "@tarojs/taro";

export  default {
  namespace: 'common',
  state: {

  },
  effects: {
    *login(_, {call, put}) {
      const {error, result} = yield call(Api.loginUrl, {})
      if(!error) {
        console.log('login successs')
      }
    },
    *isLogin(_,{call,put}) {
      const {error, result} = yield call(Api.isLogin, {})
      if(!error) {
        console.log('isLogin true')
      }
    }
  }
}
