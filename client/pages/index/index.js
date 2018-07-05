const util = require('../../utils/util.js');
const config = require('../../config');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      './ads.png',
      './ads.png',
      './ads.png'
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  requestDemo: function() {
    wx.getUserInfo({
      success: function(res) {
        util.showSuccess(res.userInfo);
        console.log(res.userInfo);
      }
    })
    console.log(wx.getSystemInfoSync());
    // wx.request({
    //   url: `${config.service.host}/weapp/demo`, //仅为示例，并非真实的接口地址,
    //   method: "GET",
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     util.showSuccess(res.data);
    //   }
    // })

  }
})
