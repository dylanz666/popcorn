const util = require('../../utils/util.js');
const config = require('../../config');
let app = getApp();

Page({
  data: {
    demo:""
  },
  onLoad: function() {
    let that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          hasUserInfo: true,
          userInfo: res.userInfo
        })
        that.update()
      }
    })
  },
  imageLoad: function() {
    //bindload 图片加载的时候自动设定宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth - 10
    })
  },
  createQrCode: function() {
    wx.navigateTo({
      url: '../../pages/generateQrCode/generateQrCode'
    })
  },
  viewElevator: function() {
    wx.navigateTo({
      url: '../../pages/elevator/elevator'
    })
  }
})