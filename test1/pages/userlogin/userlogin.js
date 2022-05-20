//获取应用实例
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    username: '',
    password: '',
    username: function (e) {
      var that = this;
      that.setData({
        username: e.detail.value
      })
    },
    password: function (e) {
      var that = this;
      that.setData({
        password: e.detail.value
      })
    },
    showTopTips: false,
    errorMsg: ""
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
  },
  goToRegist: function(){
    wx.navigateTo({
      url: '/pages/userregist/userregist'
    })
  },
  formSubmit: function (e) {
    // form 表单取值，格式 e.detail.value.name(name为input中自定义name值)
    var that = this;
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    // 判断账号是否为空和判断该账号名是否被注册  
    wx.request({
      url: "http://localhost:8080/wxlogin",
      data: {
        'username': username,
        'password': password,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.role == "student") {
          wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 20000
            })
            setTimeout(function(){
              wx.hideToast();
            }),
            getApp().globalData.username = res.data.username;
            console.log(res.data.username)
            wx.switchTab({
              url: '../index/index'
            })
        } else if (res.data.role == "teacher") {
          wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 20000
            })
            setTimeout(function(){
              wx.hideToast();
            }),
            getApp().globalData.username = res.data.username;
            wx.switchTab({
              url: '../index/index'
            })
        } else if (res.data.role == "admin") {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 20000
          })
          setTimeout(function(){
            wx.hideToast();
          }),
            wx.navigateTo({
              url: '/pages/admin/admin/index?username=' + res.data.username,
            })
        } else {
          wx.showToast({
            title: '账号或密码错误',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  }

})