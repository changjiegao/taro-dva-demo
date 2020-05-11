import Taro, { Component, Config } from "@tarojs/taro";
import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";
// import "./utils/request";
import Mine from "./pages/mine/mine";
import dva from './utils/dva'
import Api from './utils/request'
import LoginService from './service/loginService'
import models from './models'
import './app.scss'
import { globalData } from "./utils/common";


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component {
  config: Config = {
    pages: [
      'pages/mine/mine',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: './assets/images/mine.png',
          selectedIconPath: './assets/images/mine-selected.png',
        },{
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/images/home.png',
          selectedIconPath: './assets/images/home-selected.png',
        }
      ]
    }
  }

  /**
   *
   *  1.小程序打开的参数 globalData.extraData.xx
   *  2.从二维码进入的参数 globalData.extraData.xx
   *  3.获取小程序的设备信息 globalData.systemInfo
   * @memberof App
   */
  async componentDidMount() {
    // 获取参数
    const referrerInfo = this.$router.params.referrerInfo;
    const query = this.$router.params.query;
    !globalData.extraData && (globalData.extraData = {});
    if (referrerInfo && referrerInfo.extraData) {
      globalData.extraData = referrerInfo.extraData;
    }
    if (query) {
      globalData.extraData = {
        ...globalData.extraData,
        ...query
      };
    }

    // 获取设备信息
    const sys = await Taro.getSystemInfo();
    sys && (globalData.systemInfo = sys);

    // await this.login();
  }

  async login() {
    await LoginService.login();
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Mine />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
