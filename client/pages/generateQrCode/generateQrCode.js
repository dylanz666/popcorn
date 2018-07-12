const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrString: "",
    qrcode: ""
  },
  getUserInput: function(e) {
    this.setData({
      qrString: e.detail.value
    })
  },
  generateQrCode: function() {
    let apiData = this.data.qrString;
    if (apiData === "" || apiData === null) {
      util.showModel("出错啦！", "请输入文字或链接");
    }
    this.setData({
      qrcode: `http://api.okayapi.com/?s=Ext.QrCode.Png&size=10&data=${this.data.qrString}`
    });
  },
  previewImage:function(e){
    wx.previewImage({
      urls: [this.data.qrcode]  
    })
  }
})