var config = require("../../config.js");
Page({
    onLoad:function(){
        var that = this;
        that.setData({
            xueyuan:config.xueyuan
        })
    },
    goback:function(){
        wx.switchTab({url:"/pages/index/index"});
    }
})