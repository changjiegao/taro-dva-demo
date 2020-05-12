
import Taro, { Component, Config } from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MineProps, MineState } from './mine.interface'
import './mine.scss'
// import { } from '../../components'

@connect(({ mine, common }) => ({
    ...mine,
    ...common
}))

class Mine extends Component<MineProps,MineState > {
  config:Config = {
    navigationBarTitleText: '我的'
  }
  constructor(props: MineProps) {
    super(props)
    this.state = {}
  }
  async getMyInfo() {
    await this.props.dispatch({
      type: 'mine/getInfo',
      payload: {}
    })
  }

  componentDidMount() {

    this.getMyInfo()
  }
  goToDetail() {
    Taro.navigateTo({
      url: `/pages/mine-detail/index`
    });
  }

  render() {
    const { myInfo } = this.props;
    return (

      <View className='mine-wrap' onClick={this.goToDetail.bind(this)}>
        <Image className='user-logo' mode='scaleToFill' src={myInfo.userLogo} />
        {myInfo.cardName}
      </View>
    )
  }
}

export default Mine
