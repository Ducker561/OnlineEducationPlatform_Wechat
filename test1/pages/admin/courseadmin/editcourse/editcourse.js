var app = getApp();
var util = require('../../../../utils/util.js');
Page({
    data: {
        userid: 0,
        isremove: false,
        headerArray: [{
            text: '课程号',
        }, {
            text: '课程名称'
        }, {
            text: '讲师编号'
        }, {
            text: '上课时间'
        }, {
            text: '上课地点'
        }, {
            text: '周数'
        }, {
            text: '课程类型'
        }, {
            text: '课程周期'
        }, {
            text: '操作'
        }],
        studentList: []
    },
    
    onShow: function () {
        var that = this;
        var pagenum = that.data.pagenum;
        wx.request({
            url: "http://localhost:8080/wxadmin/wxshowCourse",
            //     data: { 'page': pagenum },
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                if (res.data.courselist != null) {
                    that.setData({
                        searchLoading: true, //把"上拉加载"的变量设为true，显示  
                        searchLoadingComplete: false, //把“没有数据”设为false，隐藏 
                        courselist: res.data.courselist
                    })
                    console.log(res.data.courselist)
                } else {
                    that.setData({
                        searchLoadingComplete: true, //把“没有数据”设为true，显示  
                        searchLoading: false //把"上拉加载"的变量设为false，隐藏  
                    })
                }
            }
        });
    }
})