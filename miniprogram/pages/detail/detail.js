// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
   * 1.以下就是在页面返回的时候(从B 返回 A)修改A页面的数据的实现过程，注意：这种操作需要在onUnload函数中实现
   */
  onUnload: function () {
    // console.log('页面退出');
    //1.获取首页的页面对象
    //getCurrentPages:获取当前所有活跃的页面
    const pages = getCurrentPages()
    console.log(pages);
    const main = pages[pages.length - 2]

    // 2.调用页面对象的setData
    main.setData({
      title: 'hahaha'
    })

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