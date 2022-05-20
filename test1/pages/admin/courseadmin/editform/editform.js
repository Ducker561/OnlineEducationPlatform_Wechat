var app = getApp()
var util = require('../../../../utils/util.js');
Page({
    data: {
        courseid: 1,
        courselist: [{
            "courseid": "无",
            "coursename": "无",
            "teacherid": "无",
            "coursetime": "无",
            "classroom": "无",
            "courseweek": "无",
            "coursetype": "无"
        }],
        teacherlist: [],
        collegeList: []
    },
    onLoad: function (options) {
        var that = this;

        that.setData({
            courseid: options.courseid
        })
    },
    onShow: function () {
        var that = this;
        var courseid = that.data.courseid;
        wx.request({
            url: "http://localhost:8080/wxadmin/wxeditCourse",
            data: {
                'courseid': courseid
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                that.setData({
                    courselist: res.data.courselist,
                    teacherlist: res.data.teacherlist,
                    collegeList: res.data.collegeList
                });
            }
        })
    },
    formSubmit: function (e) {
        var that = this;
        var courseid = e.detail.value.courseid;
        var coursename = e.detail.value.coursename;
        var teacherid = e.detail.value.teacherid;
        var coursetime = e.detail.value.coursetime;
        var classroom = e.detail.value.classroom;
        var courseweek = e.detail.value.courseweek;
        var coursetype = e.detail.value.coursetype;
        var collegeid = e.detail.value.collegeid;
        var score = e.detail.value.score;
        wx.showModal({
            title: '提示',
            content: '确定要提交吗?',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxadmin/wxupdateCourse",
                        data: {
                            'courseid': courseid,
                            'coursename': coursename,
                            'teacherid': teacherid,
                            'coursetime': coursetime,
                            'classroom': classroom,
                            'courseweek': courseweek,
                            'coursetype': coursetype,
                            'collegeid': collegeid,
                            'score': score
                        },
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (res) {
                            if (res.data.updatecourse == "true") {
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