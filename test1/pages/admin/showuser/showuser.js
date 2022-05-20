var app = getApp();
var util = require('../../../utils/util.js');
Page({
    data: {
        currentTab:0,
        winWidth:0,
        winHeight:0,
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
        }],
        headerArray2: [{
            text: '教师编号',
        }, {
            text: '姓名'
        }, {
            text: '性别'
        }, {
            text: '出生年月'
        }, {
            text: '学历'
        }, {
            text: '职称'
        }, {
            text: '入职时间'
        }],
        studentList:[]
    },
    onLoad:function(options){
        var page=this;
        wx.getSystemInfo({
            success:function(res){
                console.log(res);
                page.setData({winWidth:res.windowWidth});
                page.setData({winHeight:res.windowHeight});
            }
        })
    },
    switchNav:function(e){
        var page=this;
        if(this.data.currentTab == e.target.dataset.current){
            return false;
        }else{
            page.setData({currentTab:e.target.dataset.current});
            var that=this;
            wx.request({
                url: "http://localhost:8080/wxadmin/wxshowTeacher",
                //     data: { 'page': pagenum },
                method: "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    if (res.data.teacherlist != null) {
                        console.log(res.data.teacherlist);
                        for (var index1 in res.data.teacherlist) {
                            res.data.teacherlist[index1].birthyear = util.toYear(res.data.teacherlist[index1].birthyear);
                            res.data.teacherlist[index1].grade = util.toYear(res.data.teacherlist[index1].grade);
                        }
                        that.setData({
                            searchLoading: true, //把"上拉加载"的变量设为true，显示  
                            searchLoadingComplete: false, //把“没有数据”设为false，隐藏 
                            teacherlist: res.data.teacherlist,
                        })
                    } else {
                        that.setData({
                            searchLoadingComplete: true, //把“没有数据”设为true，显示  
                            searchLoading: false //把"上拉加载"的变量设为false，隐藏  
                        })
                    }
                }
            });
        }
    },
    onShow: function () {
        var that = this;
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
        })
    }
})