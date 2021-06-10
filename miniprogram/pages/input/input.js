// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  a(event) {
    console.log('键盘输入时触发：', event);
  },
  b(event) {
    console.log('获得聚焦：', event);
  },
  c(event) {
    console.log('失去焦点：', event);
  },
  d(event) {
    console.log('完成：', event);
  }
})