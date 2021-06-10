// components/my-slot/my-slot.js
Component({
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  data: {
    counter: 0
  },
  methods: {
    handleClick() {
      console.log();
    }
  },
  options: {
    // 在使用多插槽时，需要配置true 
    multipleSlots: true,
    // 设置样式的隔离方式
    // styleIsolation: {

    // }
  },
  //5.外界给组件传入额外的样式
  externalClasses: [],
  //6.可以监听properties/data的改变
  observers: {
    counter: function(newVal) {
      console.log(newVal);
    }
  },
  // ------------组件中监听生命周期函数------------
  //1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸的改变')
    }
  },
  //2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建出来时执行！');
    },
    attached() {
      console.log('组件被添加到页面中时执行！');
    },
    ready() {
      console.log('组件被渲染出来时执行！');
    },
    moved() {
      console.log('组件被移动到节点树的另外一个位置时执行！');
    },
    detached() {
      console.log('组件被移除掉时执行！');
    }
  },
  // wx:wx.request({
  //   url: 'https://httpbin.org/get',
  //   data: {
  //     name: 'kevin',
  //     age: 18
  //   },
  //   // dataType: dataType,
  //   // enableCache: true,
  //   // enableHttp2: true,
  //   // enableQuic: true,
  //   // header: header,
  //   // method: method,
  //   // responseType: responseType,
  //   timeout: 5000,
  //   success: (result) => {
  //     console.log(result);
  //   },
  //   fail: (res) => {
  //     console.log(res);
  //   },
  //   complete: (res) => {
  //     console.log('请求结束！');
  //   },
  // }),
  // wx:wx.request({
  //   url: 'https://httpbin.org/post',
  //   data: {
  //     name: '美女',
  //     type: '大长腿'
  //   },
  //   // dataType: dataType,
  //   // enableCache: true,
  //   // enableHttp2: true,
  //   // enableQuic: true,
  //   // header: header,
  //   method: 'POST',
  //   // responseType: responseType,
  //   timeout: 5000,
  //   success: (result) => {
  //     console.log(result);
  //   },
  //   fail: (res) => {},
  //   complete: (res) => {},
  // }),
  
  

}) 
