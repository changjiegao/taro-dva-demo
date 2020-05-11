
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
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

  render() {
    const { myInfo } = this.props;
    return (

      <View className='mine-wrap'>
        {myInfo.cardName}
      </View>
    )
  }
}

export default Mine
