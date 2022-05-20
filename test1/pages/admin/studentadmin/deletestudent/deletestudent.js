var app = getApp();
var util = require('../../../../utils/util.js');
Page({
    data: {
        userid: 0,
        isremove: false,
        headerArray: [{
            text: '学号',
        }, {
            text: '姓名'
        }, {
            text: '性别'
        }, {
            text: '出生年份'
        }, {
            text: '报名时间'
        }, {
            text: '操作'
        }],
        studentList: []
    },
    onShow: function () {
        var that = this;
        var pagenum = that.data.pagenum;
        wx.request({
            url: "http://localhost:8080/wxadmin/wxshowStudent",
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                if (res.data.studentlist != null) {
                    for (var index1 in res.data.studentlist) {
                        res.data.studentlist[index1].birthyear = util.toYear(res.data.studentlist[index1].birthyear);
                        res.data.studentlist[index1].grade = util.toYear(res.data.studentlist[index1].grade);
                    }
                    that.setData({
                        searchLoading: true, //把"上拉加载"的变量设为true，显示  
                        searchLoadingComplete: false, //把“没有数据”设为false，隐藏 
                        studentlist: res.data.studentlist,
                    })
                    console.log(res.data.studentlist)
                } else {
                    that.setData({
                        searchLoadingComplete: true, //把“没有数据”设为true，显示  
                        searchLoading: false //把"上拉加载"的变量设为false，隐藏  
                    })
                }
            }
        });
    },
    deleteStudent: function (e) {
        var that = this;
        that.setData({
            userid: e.target.dataset.userid
        })
        var userid = that.data.userid;
        wx.showModal({
            title: '提示',
            content: '确定要删除吗?',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxadmin/wxremoveStudent",
                        data: {
                            'userid': userid
                        },
                        header: {
                            'content-type': 'application/x-www.form-urlencoded'
                        },
                        success: function (res) {
                            if (res.data.removestudent == "true") {
                                that.setData({
                                    isremove: true
                                })
                                wx.showToast({
                                    title: '删除成功',
                                    duration: 3000
                                });
                                wx.navigateTo({
                                    url:'../../success/delresult'
                                })
                            } else {
                                wx.showToast({
                                    title: '删除失败',
                                    icon: 'loading',
                                    duration: 3000
                                });
                                that.setData({
                                    isremove: false
                                })
                            }
                        }
                    })

                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }
})