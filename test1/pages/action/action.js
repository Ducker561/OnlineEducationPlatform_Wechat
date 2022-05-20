//获取应用实例
var config = require("../../config.js");
var app = getApp()
Page({
  data: {
    actionpic: '../../image/zixun1.jpg',
    actionapic: '../../image/zixun2.jpg',
    actionbpic: '../../image/zixun3.jpg',
    actioncpic: '../../image/zixun4.jpg',
  },
  onLoad: function () {
    var that = this;
    that.setData({
      zixun: config.zixun
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
});