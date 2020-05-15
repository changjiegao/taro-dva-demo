(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/mine"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./mine.scss */ "./src/pages/mine/mine.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { } from '../../components'
var Mine = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Mine, _BaseComponent);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray123", "myInfo", "deviceName", "deviceId", "devices", "connectedDeviceId", "dispatch", "__fn_call"], _this.config = {
      navigationBarTitleText: '我的'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Mine.prototype.__proto__ || Object.getPrototypeOf(Mine.prototype), "_constructor", this).call(this, props);

      this.state = {
        deviceName: 'A400E2F07A20',
        deviceId: '',
        devices: [],
        connectedDeviceId: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "getMyInfo",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.dispatch({
                  type: 'mine/getInfo',
                  payload: {}
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMyInfo() {
        return _ref2.apply(this, arguments);
      }

      return getMyInfo;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMyInfo();
      // this.testBluetooth();
    }
  }, {
    key: "testBluetooth",
    value: function testBluetooth() {
      var that = this;
      //初始化蓝牙
      if (_taroWeapp2.default.openBluetoothAdapter) {
        _taroWeapp2.default.openBluetoothAdapter({
          // mode: 'peripheral',
          success: function success(res) {
            console.log('openBluetoothAdapter success', res);
            /* 获取本机的蓝牙状态 */
            // setTimeout(() => {
            that.getBluetoothAdapterState();
            // }, 1000)
          },
          fail: function fail(err) {
            console.log('openBluetoothAdapter fail', err);
          }
        });
      }
    }
  }, {
    key: "treatAsSlaveDevice",
    value: function treatAsSlaveDevice() {
      var that = this;
      //初始化蓝牙
      if (wx.openBluetoothAdapter) {
        wx.openBluetoothAdapter({
          mode: 'peripheral',
          success: function success(res) {
            console.log('openBluetoothAdapter peripheral success', res);
            /* 获取本机的蓝牙状态 */
            // setTimeout(() => {
            // that.getBluetoothAdapterState()
            // }, 1000)
          },
          fail: function fail(err) {
            console.log('openBluetoothAdapter fail', err);
          }
        });
      }
    }
    /**
     * 检测本机蓝牙是否可用
     */

  }, {
    key: "getBluetoothAdapterState",
    value: function getBluetoothAdapterState() {
      var that = this;
      console.log('检查蓝牙状态');
      // that.toastTitle= '检查蓝牙状态'
      _taroWeapp2.default.getBluetoothAdapterState({
        success: function success(res) {
          console.log('检查蓝牙状态 success', res);
          that.startBluetoothDevicesDiscovery();
        },
        fail: function fail(res) {
          console.log('检查蓝牙状态 fail', res);
        }
      });
    }
    /**
     * 搜索蓝牙设备
     */

  }, {
    key: "startBluetoothDevicesDiscovery",
    value: function startBluetoothDevicesDiscovery() {
      var that = this;
      setTimeout(function () {
        _taroWeapp2.default.startBluetoothDevicesDiscovery({
          success: function success(res) {
            console.log('搜索蓝牙设备 success', res);
            that.findBluetoothDevice();
            // var newDevice = that.findBluetoothDevice();
            // that.setState({
            //   devices: newDevice
            // })
            /* 获取蓝牙设备列表 */
            // that.getBluetoothDevices()
          },
          fail: function fail(res) {
            console.log('搜索蓝牙设备 fail', res);
          }
        });
      }, 1000);
    }
  }, {
    key: "findBluetoothDevice",
    value: function findBluetoothDevice() {
      var that = this;
      _taroWeapp2.default.onBluetoothDeviceFound(function (res) {
        console.log('onBluetoothDeviceFound res', res);
        res.devices.forEach(function (item) {
          if (item.name || item.localName) {
            var devices = that.state.devices;
            that.setState({
              devices: devices.concat(item)
            });
          }
        });
        // console.log('new device list has founded')
        // console.dir(devices)
        // console.log(ab2hex(devices[0].advertisData))
      });
    }
    /**
     * 获取搜索到的蓝牙设备列表
     */

  }, {
    key: "getBluetoothDevices",
    value: function getBluetoothDevices() {
      var that = this;
      setTimeout(function () {
        _taroWeapp2.default.getBluetoothDevices({
          // services: ['FEE7'],
          // services: [],
          // allowDuplicatesKey: false,
          // interval: 0,
          success: function success(res) {
            console.log('getBluetoothDevices success', res);
            var temp = res.devices;
            that.setState({
              devices: temp.sort(that.compare('deviceId'))
            });
            // console.log('getBluetoothDevices devices', that.state.devices);
            // this.state.devices = res.devices;
            if (res.devices.length > 0) {
              if (JSON.stringify(res.devices).indexOf(that.state.deviceName) !== -1) {
                for (var i = 0; i < res.devices.length; i++) {
                  // if (that.state.deviceName === res.devices[i].name) {
                  if (that.state.deviceId === res.devices[i].deviceId) {
                    /* 根据指定的蓝牙设备名称匹配到deviceId */
                    // that.state.deviceId = that.state.devices[i].deviceId;
                    // that.state.deviceId = res.devices[i].deviceId;
                    setTimeout(function () {
                      that.connectTO();
                    }, 2000);
                  }
                }
              }
            }
          },
          fail: function fail(res) {
            console.log(res, '获取蓝牙设备列表失败=====');
          }
        });
      }, 2000);
    }
  }, {
    key: "compare",
    value: function compare(prop) {
      return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (val1 < val2) {
          return -1;
        } else if (val1 > val2) {
          return 1;
        } else {
          return 0;
        }
      };
    }
    /**
     * 连接蓝牙
     */

  }, {
    key: "connectTO",
    value: function connectTO() {
      var that = this;
      _taroWeapp2.default.createBLEConnection({
        deviceId: that.state.deviceId,
        success: function success(res) {
          console.log('createBLEConnection  success', res);
          that.state.connectedDeviceId = that.state.deviceId;
          /* 4.获取连接设备的service服务 */
          that.getBLEDeviceServices();
          _taroWeapp2.default.stopBluetoothDevicesDiscovery({
            success: function success(res) {
              console.log(res, '停止搜索');
            },
            fail: function fail(res) {}
          });
        },
        fail: function fail(res) {}
      });
    }
    /**
     * 获取蓝牙设备的service服务,获取的serviceId有多个要试着连接最终确定哪个是稳定版本的service 获取服务完后获取设备特征值
     */

  }, {
    key: "getBLEDeviceServices",
    value: function getBLEDeviceServices() {
      setTimeout(function () {
        _taroWeapp2.default.getBLEDeviceServices({
          deviceId: that.state.connectedDeviceId,
          success: function success(res) {
            that.state.services = res.services;
            /* 获取连接设备的所有特征值 */
            that.getBLEDeviceCharacteristics();
          },
          fail: function fail(res) {}
        });
      }, 2000);
    }
    /**
     * 获取蓝牙设备特征值
     */

  }, {
    key: "getBLEDeviceCharacteristics",
    value: function getBLEDeviceCharacteristics() {
      setTimeout(function () {
        _taroWeapp2.default.getBLEDeviceCharacteristics({
          deviceId: connectedDeviceId,
          serviceId: services[2].uuid,
          success: function success(res) {
            for (var i = 0; i < res.characteristics.length; i++) {
              if ((res.characteristics[i].properties.notify || res.characteristics[i].properties.indicate) && res.characteristics[i].properties.read && res.characteristics[i].properties.write) {
                console.log(res.characteristics[i].uuid, '蓝牙特征值 ==========');
                /* 获取蓝牙特征值 */
                that.notifyCharacteristicsId = res.characteristics[i].uuid;
                // 启用低功耗蓝牙设备特征值变化时的 notify 功能
                that.notifyBLECharacteristicValueChange();
              }
            }
          },
          fail: function fail(res) {}
        });
      }, 1000);
    }
    /**
     * 启动notify 蓝牙监听功能 然后使用 Taro.onBLECharacteristicValueChange用来监听蓝牙设备传递数据
     #接收到的数据和发送的数据必须是二级制数据， 页面展示的时候需要进行转换
     */

  }, {
    key: "notifyBLECharacteristicValueChange",
    value: function notifyBLECharacteristicValueChange() {
      var that = this;
      console.log('6.启用低功耗蓝牙设备特征值变化时的 notify 功能');
      _taroWeapp2.default.notifyBLECharacteristicValueChange({
        state: true,
        deviceId: that.connectedDeviceId,
        serviceId: that.notifyServicweId,
        characteristicId: that.notifyCharacteristicsId,
        complete: function complete(res) {
          /*用来监听手机蓝牙设备的数据变化*/
          _taroWeapp2.default.onBLECharacteristicValueChange(function (res) {
            /**/
            that.balanceData += that.buf2string(res.value);
            that.hexstr += that.receiveData(res.value);
          });
        },
        fail: function fail(res) {
          console.log(res, '启用低功耗蓝牙设备监听失败');
          that.measuringTip(res);
        }
      });
    }
    /*转换成需要的格式*/

  }, {
    key: "buf2string",
    value: function buf2string(buffer) {
      var arr = Array.prototype.map.call(new Uint8Array(buffer), function (x) {
        return x;
      });
      return arr.map(function (char, i) {
        return String.fromCharCode(char);
      }).join('');
    }
  }, {
    key: "receiveData",
    value: function receiveData(buf) {
      return this.hexCharCodeToStr(this.ab2hex(buf));
    }
    /*转成二进制*/

  }, {
    key: "ab2hex",
    value: function ab2hex(buffer) {
      var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
        return ('00' + bit.toString(16)).slice(-2);
      });
      return hexArr.join('');
    }
    /*转成可展会的文字*/

  }, {
    key: "hexCharCodeToStr",
    value: function hexCharCodeToStr(hexCharCodeStr) {
      var trimedStr = hexCharCodeStr.trim();
      var rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr;
      var len = rawStr.length;
      var curCharCode;
      var resultStr = [];
      for (var i = 0; i < len; i = i + 2) {
        curCharCode = parseInt(rawStr.substr(i, 2), 16);
        resultStr.push(String.fromCharCode(curCharCode));
      }
      return resultStr.join('');
    }
    /**
     * 向蓝牙设备发送数据
     */

  }, {
    key: "sendData",
    value: function sendData(str) {
      var that = this;
      var dataBuffer = new ArrayBuffer(str.length);
      var dataView = new DataView(dataBuffer);
      for (var i = 0; i < str.length; i++) {
        dataView.setUint8(i, str.charAt(i).charCodeAt());
      }
      var dataHex = that.ab2hex(dataBuffer);
      this.writeDatas = that.hexCharCodeToStr(dataHex);
      _taroWeapp2.default.writeBLECharacteristicValue({
        deviceId: that.connectedDeviceId,
        serviceId: that.notifyServicweId,
        characteristicId: that.notifyCharacteristicsId,
        value: dataBuffer,
        success: function success(res) {
          console.log('发送的数据：' + that.writeDatas);
          console.log('message发送成功');
        },
        fail: function fail(res) {},
        complete: function complete(res) {}
      });
    }
    /**
     * 当不需要连接蓝牙了后就要关闭蓝牙，并关闭蓝牙模块
     */

  }, {
    key: "closeConnect",
    value: function closeConnect() {
      var that = this;
      if (that.connectedDeviceId) {
        _taroWeapp2.default.closeBLEConnection({
          deviceId: that.connectedDeviceId,
          success: function success(res) {
            that.closeBluetoothAdapter();
          },
          fail: function fail(res) {}
        });
      } else {
        that.closeBluetoothAdapter();
      }
    }
    // 关闭蓝牙模块

  }, {
    key: "closeBluetoothAdapter",
    value: function closeBluetoothAdapter() {
      _taroWeapp2.default.closeBluetoothAdapter({
        success: function success(res) {},
        fail: function fail(err) {}
      });
    }
  }, {
    key: "clearDevice",
    value: function clearDevice() {
      this.setState({
        devices: []
      });
    }
  }, {
    key: "goToDetail",
    value: function goToDetail() {
      _taroWeapp2.default.navigateTo({
        url: "/pages/mine-detail/index"
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var myInfo = this.__props.myInfo;


      var loopArray123 = this.__state.devices.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = new RegExp("^E0.*$").test(item.$original.deviceId);

        if ($loopState__temp2) {}
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        loopArray123: loopArray123,
        myInfo: myInfo
      });
      return this.__state;
    }
  }]);

  return Mine;
}(_taroWeapp.Component), _class.$$events = ["goToDetail", "treatAsSlaveDevice", "testBluetooth", "closeConnect", "clearDevice"], _class.$$componentPath = "pages/mine/mine", _temp2);
Mine = (0, _tslib.__decorate)([(0, _redux.connect)(function (_ref3) {
  var mine = _ref3.mine,
      common = _ref3.common;
  return _extends({}, mine, common);
})], Mine);
exports.default = Mine;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Mine, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\学习\\taro-dva-demo\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/学习/taro-dva-demo/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mine/mine.wxml";

/***/ }),

/***/ "./src/pages/mine/mine.scss":
/*!**********************************!*\
  !*** ./src/pages/mine/mine.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mine/mine.tsx":
/*!*********************************!*\
  !*** ./src/pages/mine/mine.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.tsx?taro&type=template&parse=PAGE& */ "./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.tsx?taro&type=script&parse=PAGE& */ "./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./mine.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_taro_dva_demo_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/学习/taro-dva-demo/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./mine.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\学习\\taro-dva-demo\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_taro_dva_demo_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_taro_dva_demo_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_taro_dva_demo_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_taro_dva_demo_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/mine/mine.tsx","runtime","vendors"]]]);