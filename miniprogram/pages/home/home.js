// miniprogram/home.js
// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'kevin',
    students: [
      {id: 1, name: 'kitty', age: 18},
      {id: 2, name: 'kobe', age: 20},
      {id: 3, name: 'jeams', age: 30},
      {id: 4, name: 'Hina', age: 40}
    ],
    counter: 0

  },
  handleBtnClick() {
    // this.setData() : 修改data里面的数据必须使用这个方法
    // setData 函数用于将数据从逻辑层发送到视图层 （异步），同时改变对应的 this.data 的值（同步）。
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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

  },

 // -------4. 监听其他事件 --------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听上拉加载更多

  // 监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新的事件')
  },
  // 监听上拉触底事件
  onReachBottom() {
    console.log('页面触底拉！')
  },
})