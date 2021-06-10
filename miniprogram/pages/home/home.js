// pages/home/home.js
Page({
  onLoad: function (options) {
    console.log(options);
  },
  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  handerIncreament() {
    this.setData({
      counter: this.data.counter +1
    })
  },
  handleTabClick(event) {
    console.log(event);
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  //7.
  handerIncreamentCpn() {
    //最终的目的是：修改my-sel中的counter
    // 1.获取my-sel组件对象
    const my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel);
    // 2.通过setData修改组件中的数据 （一般我们不推荐这样直接修改组件的data,而是通过方法区修改）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })
    // 3.通过方法进行修改组件中的数据
    my_sel.increamentCounter(20)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
    // wx.request({
    //   url: 'https://httpbin.org/get',
    //   data: {
    //     name: 'kevin',
    //     type: '美女'
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})