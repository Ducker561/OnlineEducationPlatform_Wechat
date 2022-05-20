var app = getApp();
var config = require("../../config.js");
Page({
    data: {
        courselist: [{
            imgs: [
                "../../image/Android.jpg",
                "../../image/Java.jpg"
            ]
        }],
        color: "#7fabfd",
        newsList: [],
        HomeIndex: 0
    },
    onLoad: function () {
        var that = this;
        //console.log(config.courses);
        that.setData({
            courses: config.courses
        });
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
})