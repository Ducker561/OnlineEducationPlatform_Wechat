//teacher.js
//获取应用实例
var app = getApp();
var config = require("../../config.js");
Page({
  data: {
    trimg: '../../image/teachermanage.png',
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      teacher: config.teacher
    });
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})