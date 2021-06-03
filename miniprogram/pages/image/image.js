// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseImage() {
    //系统API，然用户在相册中选择图片(或拍照)
    wx.chooseImage({
      success: res => {
        console.log(res);
        //1.取出路径
        const path = res.tempFilePaths[0]
        //2.设置imagePath
        this.setData({
          imagePath: path
        })
      }
    })
  },
  handerLoadFinish() {
    console.log('图片已加载完成！');
  }


})