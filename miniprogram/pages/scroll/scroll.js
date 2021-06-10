// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: 20,
    nowTime: '',
    isActive: false
  },
  // detail --> scrollTop
  handerScroll(event) {
    console.log('页面滚动！', event);
  },
  handlerColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        // Date
        // nowTime: new Date().toLocaleDateString()
        // Date & Time
        nowTime: new Date().toLocaleString()  
        // Time
        // nowTime: new Date().toLocaleTimeString()
      })
    }, 1000);
  }
  
})