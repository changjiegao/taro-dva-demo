
// import Taro from '@tarojs/taro';
import * as mineApi from "../mine/service";

export default {
  namespace: 'mine',
  state: {
    myInfo: {},
  },

  effects: {
    *getInfo(_, { call, put }) {
      const { error, data } = yield call(mineApi.getInfo, {});
      if (!error) {
        console.log('getInfo result:', data);
        yield put({
          type: 'updateMyInfo',
          payload: {
            myInfo: data
          }
        })
      }
    }
  },

  reducers: {
    updateMyInfo(state, { payload: data }) {
      return { ...state, ...data }
    }
  }

}
