var util = require('../../utils/util.js')
Page({
  data: {
    voteItems: [{
        id: 1,
        index: '1',
        name: '周几TB？',
        items: ["周一", "周二", "周三", "周四", "周五"]
      },
      {
        id: 2,
        index: '2',
        name: '去哪家餐厅？',
        items: ["麦当劳", "肯德基", "必胜客", "千尊皮萨"]
      },
      {
        id: 3,
        index: '3',
        name: '出行方式投票',
        items: ["走路", "开车", "火车", "飞机"]
      },
      {
        id: 4,
        index: '4',
        name: '要不要去唱歌？',
        items: ["要", "不要"]
      },
      {
        id: 5,
        index: '5',
        name: '要不要吃鸡？',
        items: ["要", "不要"]
      },
      {
        id: 6,
        index: '6',
        name: '你爱小程序吗？',
        items: ["爱", "不爱"]
      },
    ]
  }
})