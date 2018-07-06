const util = require('../../utils/util.js');
const config = require('../../config');
let app = getApp();

Page({
  data: {
    imgUrls: [
      './ads.jpg',
      './ads.jpg',
      './ads.jpg'
    ],
    autoplay: true, //是否自动切换
    indicatorDots: true, //是否显示圆点
    interval: 5000, //自动切换间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    hasUserInfo: false
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
  viewJinXing: function() {
    wx.navigateTo({
      url: '../../pages/jinxingmeifa/jinxingmeifa'
    })
  },
  viewTianLi: function() {
    wx.navigateTo({
      url: '../../pages/tianlixiecai/tianlixiecai'
    })
  },
  viewElevator: function() {
    wx.navigateTo({
      url: '../../pages/elevator/elevator'
    })
  }
})