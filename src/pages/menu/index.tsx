
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MenuProps, MenuState } from './menu.interface'
import './menu.scss'
// import { } from '../../components'

// @connect(({ menu }) => ({
//     ...menu,
// }))

class Menu extends Component<MenuProps,MenuState > {
  config:Config = {
    navigationBarTitleText: '菜单'
  }
  constructor(props: MenuProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <View className='menu-wrap'>

      </View>
    )
  }
}

export default Menu
