// getCurrentPage是获取当前页面的实例对象。
const app = getApp()
Page({

  data: {
    balance:0.00,
    score:0,
    username:"未登录",
    userInfo: {},
    userimg:"../../image/skd.jpg",
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arrow:"../../image/0106arrow3x.png",

    // 1.菜单栏数据
    items: [{
        icon: '../../image/yuyue.png',
        text: '我的预约',
        url:'../example/order/order'
      },

      {
        icon: '../../image/shoucang.png',
        text: '我的收藏',
        url:'../example/collect/collect'
      },

      {
        icon: '../../image/yijan.png',
        text: '意见反馈',
        url:'../example/fdback/fdback'
      },

      {
        icon: '../../image/qiandao.png',
        text: '每日签到',
        url:"../example/sign/index"
      },

      {
        icon: '../../image/youhui.png',
        text: '优惠券',
        url:"../example/coupons/index"
      },
      {
        icon:'../../image/kefu.png',
        text: '联系我们',
        url:"../example/contact/index"
      }
    ],

  },
  gotopage: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.hi
    })
  },
  goAsset:function(){
    wx.navigateTo({
      url:"/pages/asset/index"
    })
  },
  goScore:function(){
    wx.navigateTo({
      url:"/pages/score/index"
    })
  },
  
  getUserProfile: function(e) {
    let that = this;
    console.log(e)
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息，进行登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        // 用户登录，后台获取openid
        wx.login({
          success: function (res) {
            console.log(res)
            if (res.code) {
              wx.request({
                url: 'http://localhost:8088/javaweb_war_exploded/loginServlet',
                data: {
                  code: res['code']
                },
                header: {
                  'content-type': 'application/json'
                },
                dataType:'json',
                success: function (res) {
                  console.log('success')
                  that.setData({
                    balance: res.data[0].muchMoney,
                    score: res.data[0].points
                  })
                }
              })
            }
          }
        })
        this.setData({
          userInfo: res.userInfo,
          username: res.userInfo['nickName'],
          hasUserInfo: true
        })
        app.globalData.username=res.userInfo['nickName']
        app.globalData.userInfo=res.userInfo
        console.log(res.userInfo)
      }
    })
  },

  onLoad() {
    if (wx.getUserProfile) {
      console.log(1)
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  //事件处理函数
  bindViewTap: function () {
    var that = this;
    wx.openSetting({
      success: function (res) { // 这里重新调用代码，比如这里的重新显示头像昵称
        res.authSetting = {
          "scope.userInfo": true,
        }
      },
    })
  },
})