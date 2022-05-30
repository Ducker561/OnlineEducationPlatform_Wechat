//index.js
//获取应用实例
var app = getApp();
var config = require("../../config.js");
Page({
  data: {
    school: '../../image/school.png',
    indextel: '../../image/indextel.png',
    weizhi: '../../image/weizhi.png',
    a1src: '../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg: '../../image/signup.png',
    imgsrc: '../../image/java1.jpg',
    iconsrc: '../../image/usercount.png',
    jtsrc: '../../image/icon-jt.png',
    imgUrls: [
      '../../image/lunbo2.jpg',
      '../../image/lunbo3.jpg',
      '../../image/lunbo1.jpg',
    ],
    photos: [
      '../../image/p1.jpg',
      '../../image/p2.jpg',
      '../../image/p3.jpg',
      '../../image/p4.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navs: [{
        url: '/pages/caculate/index',
        image: '/image/计算器.png',
        text: '计算器'
      },
      {
        url: '/pages/search/search',
        image: '/image/英语.png',
        text: '单词查询'
      }, 
     {
      url: '/pages/xueyuan/index',
      image: '/image/xy.png',
      text: '学员风采'
    }, 
    {
      url: '/pages/about/about',
      image: '/image/关于我们.png',
      text: '关于我们'
    }
  ]
    
  },
  //功能导航到点击界面中
  gotopage: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.hi
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '培训机构首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  },
  onLoad: function () {
    var that = this;
    console.log(config.courses);
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
  onShareAppMessage: function () {
    return {
      title: 'XXXXX培训机构',
      desc: '培训的领军者!',
      path: '/page/index/index'
    }
  },
  jumpToCourse: function () {
    wx.navigateTo({
      url: "/pages/new_course/course"
    })
  }
})