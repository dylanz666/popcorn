var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    votingId: "",
    votingName: "",
    votingItems: [],
    voted: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id;
    var name = options.name;
    var items = options.items.split(",");
    var that = this;
    that.setData({
      votingId: id,
      votingName: name,
      votingItems: items
    });
  },
  radioChange: function(e) {
    var that = this;
    that.setData({
      voted: e.detail.value
    });
  },
  confirmVote: function() {
    let _voted = this.data.voted;
    if (_voted === ""){
      util.showModel("投票出错", "请选择投票项!");
      return;
    }
    util.showSuccess(this.data.voted);
    
    setTimeout(function () {
      wx.navigateTo({
        url: '../../pages/listVoting/listVoting'
      })
    }, 2000);    
  }
})