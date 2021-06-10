// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 25.5674435,
    titles: ['衣服','裤子','鞋子']
  },
  handleBtnClick() {
    console.log('点击了！');
  },
  handleBtnClick1() {
    console.log('点击按钮1');
  },
  handleBtnClick2() {
    console.log('点击按钮2');
  },
  handleBtnClick3() {
    console.log('点击按钮3');
  },

  // 常见事件类型
  handleTouchStart() {
    console.log('开始触摸！');
  },
  handleTouchMove() {
    console.log('触摸后移动！');
  },
  handleTouchEnd() {
    console.log('触摸结束！');
  },
  handleTap() {
    console.log('手指触摸后马上离开！');
  },
  handleLongPress() {
    console.log('手指触摸超过350ms再离开！');
  },
  handleItemClick(e) {
    console.log(e);
    const dataset = e.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(index, title);
  },

  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1');
  },
  handleBindView1() {
    console.log('handleBindView1');
  },
  handleCaptureView2() {
    console.log('handleCaptureView2');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleCaptureView3() {
    console.log('handleCaptureView3');
  },
  handleBindView3() {
    console.log('handleBindView3');
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

  }
})