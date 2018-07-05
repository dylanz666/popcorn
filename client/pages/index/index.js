const util = require('../../utils/util.js');
const config = require('../../config');

Page({

  data: {
    imgUrls: [
      './ads.png',
      './ads.png',
      './ads.png'
    ],
    autoplay: true,//是否自动切换
    indicatorDots: true,//是否显示圆点
    interval: 5000,//自动切换间隔
    duration: 1000, //滑动动画时长
    circular: true  //是否采用衔接滑动
    //其中只可放置<swiper-item/>组件，否则会导致未定义的行为。
  },
  imageLoad: function () {
    //bindload 图片加载的时候自动设定宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth-10
    })
  }
})
