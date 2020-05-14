
import Taro, { Component, Config } from '@tarojs/taro'
import {Button, Image, View} from '@tarojs/components'
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
    this.state = {
      deviceName: 'A400E2F07A20',
      deviceId: '',
      devices: [],
      connectedDeviceId: ''
    }
  }
  async getMyInfo() {
    await this.props.dispatch({
      type: 'mine/getInfo',
      payload: {}
    })
  }

  componentDidMount() {

    this.getMyInfo();
    // this.testBluetooth();
  }
  testBluetooth() {
    var that = this;
    //初始化蓝牙
    if (Taro.openBluetoothAdapter) {
      Taro.openBluetoothAdapter({
        // mode: 'peripheral',
        success: function(res) {
          console.log('openBluetoothAdapter success', res);
          /* 获取本机的蓝牙状态 */
          // setTimeout(() => {
            that.getBluetoothAdapterState()
          // }, 1000)

        },
        fail: function(err) {
          console.log('openBluetoothAdapter fail', err);
        }
      })
    } else {
    }
  }

  /**
   * 检测本机蓝牙是否可用
   */
  getBluetoothAdapterState() {
    var that= this;
    console.log('检查蓝牙状态');
    // that.toastTitle= '检查蓝牙状态'
    Taro.getBluetoothAdapterState({
      success: function(res) {
        console.log('检查蓝牙状态 success', res);
        that.startBluetoothDevicesDiscovery()
      },
      fail(res) {
        console.log('检查蓝牙状态 fail', res)
      }
    })
  }

  /**
   * 搜索蓝牙设备
   */
  startBluetoothDevicesDiscovery() {
    var that= this;
    setTimeout(() => {
      Taro.startBluetoothDevicesDiscovery({
        success: function(res) {
          console.log('搜索蓝牙设备 success', res)
          that.findBluetoothDevice();
          // var newDevice = that.findBluetoothDevice();
          // that.setState({
          //   devices: newDevice
          // })
          /* 获取蓝牙设备列表 */
          // that.getBluetoothDevices()
        },
        fail(res) {
          console.log('搜索蓝牙设备 fail', res)
        }
      })
    }, 1000)
  }

 findBluetoothDevice() {
    var that= this;
    Taro.onBluetoothDeviceFound(function (res) {
      console.log('onBluetoothDeviceFound res', res);
      // if (!res.devices.name) {
      //   return
      // }
      var devices = that.state.devices;
      that.setState({
        devices: devices.concat(res.devices)
      })
      // console.log('new device list has founded')
      // console.dir(devices)
      // console.log(ab2hex(devices[0].advertisData))
    })
    // Taro.onBluetoothDeviceFound((res) => {
    //   console.log('onBluetoothDeviceFound res', res);
    //   that.setState({
    //     devices: res.devices
    //   })
    //   // res.devices.forEach(device => {
    //   //   if (!device.name && !device.localName) {
    //   //     return
    //   //   }
    //   //   console.log('onBluetoothDeviceFound', device);
    //   //
    //   //   // this.devices.push(device);
    //   // })
    // })
  }

  /**
   * 获取搜索到的蓝牙设备列表
   */
  getBluetoothDevices() {
    var that= this;
    setTimeout(() => {
      Taro.getBluetoothDevices({
        // services: ['FEE7'],
        // services: [],
        // allowDuplicatesKey: false,
        // interval: 0,
        success: function(res) {
          console.log('getBluetoothDevices success', res);
          var temp = res.devices;
          that.setState({
            devices: temp.sort(that.compare('deviceId'))
          })
          // console.log('getBluetoothDevices devices', that.state.devices);
          // this.state.devices = res.devices;
          if (res.devices.length> 0) {
            if (JSON.stringify(res.devices).indexOf(that.state.deviceName) !== -1) {
              for (let i = 0; i < res.devices.length; i++) {
                // if (that.state.deviceName === res.devices[i].name) {
                if (that.state.deviceId === res.devices[i].deviceId) {
                  /* 根据指定的蓝牙设备名称匹配到deviceId */
                  // that.state.deviceId = that.state.devices[i].deviceId;
                  // that.state.deviceId = res.devices[i].deviceId;
                  setTimeout(() => {
                    that.connectTO();
                  }, 2000);
                }
              }
            } else {
            }
          } else {
          }
        },
        fail(res) {
          console.log(res, '获取蓝牙设备列表失败=====')
        }
      })
    }, 2000)
  }
  compare (prop) {
    return function(obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  /**
   * 连接蓝牙
   */
  connectTO() {
    let that = this;
    Taro.createBLEConnection({
      deviceId: that.state.deviceId,
      success: function(res) {
        console.log('createBLEConnection  success', res);
        that.state.connectedDeviceId = that.state.deviceId;
        /* 4.获取连接设备的service服务 */
       that.getBLEDeviceServices();
        Taro.stopBluetoothDevicesDiscovery({
          success: function(res) {
            console.log(res, '停止搜索')
          },
          fail(res) {
          }
        })
      },
      fail: function(res) {
      }
    })
  }

  /**
   * 获取蓝牙设备的service服务,获取的serviceId有多个要试着连接最终确定哪个是稳定版本的service 获取服务完后获取设备特征值
   */
  getBLEDeviceServices() {
    setTimeout(() => {
      Taro.getBLEDeviceServices({
        deviceId: that.state.connectedDeviceId,
        success: function(res) {
          that.state.services= res.services
          /* 获取连接设备的所有特征值 */
          that.getBLEDeviceCharacteristics()
        },
        fail: (res) => {
        }
      })
    }, 2000)
  }

  /**
   * 获取蓝牙设备特征值
   */
  getBLEDeviceCharacteristics() {
    setTimeout(() => {
      Taro.getBLEDeviceCharacteristics({
        deviceId: connectedDeviceId,
        serviceId: services[2].uuid,
        success: function(res) {
          for (var i = 0; i < res.characteristics.length; i++) {
            if ((res.characteristics[i].properties.notify || res.characteristics[i].properties.indicate) &&
              (res.characteristics[i].properties.read && res.characteristics[i].properties.write)) {
              console.log(res.characteristics[i].uuid, '蓝牙特征值 ==========')
              /* 获取蓝牙特征值 */
              that.notifyCharacteristicsId = res.characteristics[i].uuid
// 启用低功耗蓝牙设备特征值变化时的 notify 功能
              that.notifyBLECharacteristicValueChange()
            }
          }
        },
        fail: function(res) {
        }
      })
    }, 1000)
  }

  /**
   * 启动notify 蓝牙监听功能 然后使用 Taro.onBLECharacteristicValueChange用来监听蓝牙设备传递数据
   #接收到的数据和发送的数据必须是二级制数据， 页面展示的时候需要进行转换
   */
  notifyBLECharacteristicValueChange() { // 启用低功耗蓝牙设备特征值变化时的 notify 功能
    var that= this;
    console.log('6.启用低功耗蓝牙设备特征值变化时的 notify 功能')
    Taro.notifyBLECharacteristicValueChange({
      state: true,
      deviceId: that.connectedDeviceId,
      serviceId: that.notifyServicweId,
      characteristicId: that.notifyCharacteristicsId,
      complete(res) {
        /*用来监听手机蓝牙设备的数据变化*/
        Taro.onBLECharacteristicValueChange(function(res) {
          /**/
          that.balanceData += that.buf2string(res.value)
          that.hexstr += that.receiveData(res.value)
        })
      },

      fail(res) {
        console.log(res, '启用低功耗蓝牙设备监听失败')
        that.measuringTip(res)
      }
    })
  },

  /*转换成需要的格式*/
  buf2string(buffer) {
    var arr = Array.prototype.map.call(new Uint8Array(buffer), x => x)
    return arr.map((char, i) => {
      return String.fromCharCode(char);
    }).join('');
  },

  receiveData(buf) {
    return this.hexCharCodeToStr(this.ab2hex(buf))
  },

  /*转成二进制*/

  ab2hex (buffer) {
    var hexArr = Array.prototype.map.call(
      new Uint8Array(buffer), function (bit) {
        return ('00' + bit.toString(16)).slice(-2)
      }
    )
    return hexArr.join('')
  },

  /*转成可展会的文字*/

  hexCharCodeToStr(hexCharCodeStr) {
    var trimedStr = hexCharCodeStr.trim();
    var rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr;
    var len = rawStr.length;
    var curCharCode;
    var resultStr= [];
    for (var i = 0; i < len; i = i+ 2) {
      curCharCode = parseInt(rawStr.substr(i, 2), 16);
      resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join('');
  }

  /**
   * 向蓝牙设备发送数据
   */
  sendData(str) {
    let that= this;
    let dataBuffer = new ArrayBuffer(str.length)
    let dataView = new DataView(dataBuffer)
    for (var i = 0; i < str.length; i++) {
      dataView.setUint8(i, str.charAt(i).charCodeAt())
    }
    let dataHex = that.ab2hex(dataBuffer);
    this.writeDatas = that.hexCharCodeToStr(dataHex);
    Taro.writeBLECharacteristicValue({
      deviceId: that.connectedDeviceId,
      serviceId: that.notifyServicweId,
      characteristicId: that.notifyCharacteristicsId,
      value: dataBuffer,
      success: function (res) {
        console.log('发送的数据：' + that.writeDatas)
        console.log('message发送成功')
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
    })
  }

  /**
   * 当不需要连接蓝牙了后就要关闭蓝牙，并关闭蓝牙模块
   */
  closeConnect() {
    var that = this;
    if (that.connectedDeviceId) {
      Taro.closeBLEConnection({
        deviceId: that.connectedDeviceId,
        success: function(res) {
          that.closeBluetoothAdapter()
        },
        fail(res) {
        }
      })
    } else {
      that.closeBluetoothAdapter()
    }
  },
  // 关闭蓝牙模块
  closeBluetoothAdapter() {
    Taro.closeBluetoothAdapter({
      success: function(res) {
      },
      fail: function(err) {
      }
    })
  },
  clearDevice() {
    this.setState({
      devices: []
    })
  }
  treatAsSlaveDevice() {

  }


  goToDetail() {
    Taro.navigateTo({
      url: `/pages/mine-detail/index`
    });
  }

  render() {
    const { myInfo } = this.props;
    return (
      <View>
        <View className='mine-wrap' onClick={this.goToDetail.bind(this)}>
          <Image className='user-logo' mode='scaleToFill' src={myInfo.userLogo} />
          {myInfo.cardName}
        </View>
        <Button onClick={this.treatAsSlaveDevice}>作为从设备</Button>
        <Button onClick={this.testBluetooth}>开启蓝牙模块，开始搜索</Button>
        <Button onClick={this.closeConnect}>关闭蓝牙</Button>
        {/*<Button onClick={this.closeBluetoothAdapter}>关闭蓝牙模块</Button>*/}
        <Button onClick={this.clearDevice}>清除数据</Button>
        <View>
          {(this.state.devices.map((item, index) => {
              if (new RegExp("^E0.*$").test(item.deviceId)) {
                return <View style={'color: red'}>找到设备：第{index}个，deviceId为： {item.deviceId}、设备名：{item.name}、localName: {item.localName} </View>
              }
              return <View>设备{index}: {item.deviceId}、{item.name}、localName: {item.localName}</View>
            })
          )}
        </View>
      </View>
    )
  }
}

export default Mine
