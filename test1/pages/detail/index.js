//获取应用实例
var config = require("../../config.js");
var app = getApp()
Page({

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: config.telphone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      course: config.courses[options.id - 1]
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})