
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MineDetailProps, MineDetailState } from './index.interface'
import './index.scss'
// import { } from '../../components'

@connect(({ MineDetail }) => ({
    ...MineDetail,
}))


class MineDetail extends Component<MineDetailProps,MineDetailState > {
  config:Config = {
    navigationBarTitleText: '个人信息'
  }
  constructor(props: MineDetailProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.initPage();
  }
  async initPage() {
    await this.props.dispatch({
      type: 'mine-detail/getInfo',
      payload: {}
    })
  }

  render() {
    return (
      <View className='MineDetail-wrap'>

      </View>
    )
  }
}

export default MineDetail
