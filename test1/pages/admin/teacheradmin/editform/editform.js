var app = getApp()
var util = require('../../../../utils/util.js');
Page({
    data: {
        userid: 1,
        teacher: [],
    },
    onLoad: function (options) {
        var that = this;

        that.setData({
            userid: options.userid
        })
    },
    onShow: function () {
        var that = this;
        var userid = that.data.userid;
        wx.request({
            url: "http://localhost:8080/wxadmin/wxeditTeacher",
            data: {
                'userid': userid
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                res.data.teacher.birthyear = util.toDate(res.data.teacher.birthyear);
                res.data.teacher.grade = util.toDate(res.data.teacher.grade);
                that.setData({
                    teacher: res.data.teacher
                });
            }
        })
    },
    formSubmit: function (e) {
        var that = this;
        var userid = e.detail.value.userid;
        var username = e.detail.value.username;
        var sex = e.detail.value.sex;
        var birthyear = e.detail.value.birthyear;
        var degree = e.detail.value.degree;
        var title = e.detail.value.title;
        var grade = e.detail.value.grade;
        var collegeid = e.detail.value.collegeid;
        wx.showModal({
            title: '提示',
            content: '确定要提交吗?',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxadmin/wxupdateTeacher",
                        data: {
                            'userid': userid,
                            'username': username,
                            'sex': sex,
                            'birthyear': birthyear,
                            'degree': degree,
                            'title': title,
                            'grade': grade,
                            'collegeid': collegeid
                        },
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (res) {
                            if (res.data.updateteacher == "true") {
                                wx.showToast({
                                    title: '提交成功',
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