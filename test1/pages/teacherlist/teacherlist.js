//teacherlist.js
//获取应用实例
var app = getApp();
var config = require("../../config.js");
Page({
  onLoad: function (options) {
    var that = this;
    that.setData({
      teacher: config.teacher[options.id - 1]
    });
  }
})