const app = getApp()
Page({
  data: {
    talks: [],
    touchStart: 0,
    inputValue: '',
    inputBiaoqing: '',
    animation:null,
    talksAnimationData:null,
    faces: [
      'https://tse1-mm.cn.bing.net/th/id/R-C.8508977a31090724d0b4a4cf3f5bc74d?rik=hDcyEVYLSPpikw&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f14%2f1581671791132262.jpg&ehk=x%2fuOHd37vo7JxXioK9DLQ4FPug6aIODJJE0OYyCXQAs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', 
      'https://tse1-mm.cn.bing.net/th/id/R-C.8f50ea94ec60d473a2282b972792e1be?rik=GocLsdyj42mq7A&riu=http%3a%2f%2ftupian.qqw21.com%2farticle%2fUploadPic%2f2019-4%2f201942420442839715.jpg&ehk=gkRuklrYrSjVfvzxzexv1G%2fhMxpeUC1qrDCZFSmc4Ug%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', 
      'https://www.com8.cn/wp-content/uploads/2020/11/20201108023309-5fa758e5be02a.jpg'],
    names: ['Mia', 'LiLy','Tom',app.globalData.username],
    isShow: false, //控制emoji表情是否显示 
    isLoad: true, //解决初试加载时emoji动画执行一次
    cfBg: false,
    emojiChar: "☺-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-✈-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?-?",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [], //qq、微信原始表情
    alipayEmoji: [], //支付宝表情
  },
  onShow: function(){
    console.log("onshow");
    if(app.globalData.role!=1){
      console.log("不是1");
      wx.switchTab({
        url: '../mine/mine',
      })
    }
  },
  onLoad: function() {
    console.log("onload");
    if(app.globalData.role!=1){
      console.log("不是1");
      wx.switchTab({
        url: '../mine/mine',
      })
    }
    var em = {},
      that = this,
      emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function(v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    that.setData({
      emojis: emojis
    })
  },
  //解决滑动穿透问题
  emojiScroll: function(e) {
    console.log(e)
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function() {
    this.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      cfBg: !this.data.false
    })
  },
  //表情选择
  emojiChoose: function(e) {
    console.log(e)
    //当前输入内容和表情合并
    //  let value = e.currentTarget.dataset.emoji;
    this.data.inputBiaoqing += e.currentTarget.dataset.emoji;
    console.log(this.data.inputBiaoqing)
    this.setData({
      inputValue: this.data.inputBiaoqing
    })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function() {
    console.log('womenlai')
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  onReady: function() {
    // 评论弹出层动画创建
    this.animation = wx.createAnimation({
      duration: 400, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    })
  },
  showTalks: function() {
    // 加载数据
    this.loadTalks();
    // 设置动画内容为：使用绝对定位显示区域，高度变为100%
    this.animation.bottom("0rpx").height("100%").step()
    this.setData({
      talksAnimationData: this.animation.export()
    })
  },
 
  hideTalks: function() {
    // 设置动画内容为：使用绝对定位隐藏整个区域，高度变为0
    this.animation.bottom("-100%").height("0rpx").step()
    this.setData({
      talks: [],
      talksAnimationData: this.animation.export()
    })
  },
 
  // 加载数据
  loadTalks: function() {
    // 随机产生一些评论
    wx.showNavigationBarLoading();
    let that = this;
    let talks = [];
    let faces = ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1535701703&di=bfde939cc559b0f8edcbfd1adb6e667d&src=http://img5q.duitang.com/uploads/item/201505/15/20150515205520_iWF2U.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535711703167&di=ce7a08b889137a70f7b4568e13df0e4d&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F6f061d950a7b02088811236964d9f2d3562cc85a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535711703162&di=8ec21b75cb44de532f8be29300f075b0&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150710%2F0005018347189196_b.jpg',
    ];
    let names = ['John', 'Sam', 'Jim', 'Sara'];
    console.log(app.globalData.username)
    let contents = ['数据库上课真有趣', '确实', '我觉得龚勋老师讲课挺好的','真不错','哈哈'];
    let talktime = '刚刚';  //要改
    console.log(talktime)
    talks = talks.concat(that.data.talks);
 
    // 随机产生10条评论
    for (var i = 0; i < 10; i++) {
      talks.push({
        avatarUrl: faces[Math.floor(Math.random() * faces.length)],
        nickName: names[Math.floor(Math.random() * names.length)],
        content: contents[Math.floor(Math.random() * contents.length)],
        talkTime: talktime
      });
    }
    console.log(talks)
    this.setData({
      talks: talks,
      talksAnimationData: that.animation.export()
    })
    console.log(that.talks)
    wx.hideNavigationBarLoading();
  },
 
  onScrollLoad: function() {
    // 加载新的数据
    if(this.talks.length<=30){
      this.loadTalks();
    }
  },
  //下拉评论框隐藏
  touchStart: function(e) {
    let touchStart = e.touches[0].clientY;
    this.setData({
      touchStart,
    })
  },
  touchMove: function(e) {
    // console.log(this.data.touchStart)
    let touchLength = e.touches[0].clientY - this.data.touchStart;
    console.log(touchLength - 100)
    if (touchLength > 100) {
      this.animation.bottom("-100%").height("0rpx").step()
      this.setData({
        talks: [],
        talksAnimationData: this.animation.export(),
      })
    }
  },
  //输入框失去焦点时触发
  bindInputBlur: function(e) {
    console.log(e)
    console.log(this.data.inputBiaoqing)
    this.data.inputValue = e.detail.value + this.data.inputBiaoqing;
  },
  //点击发布，发布评论
  faBu: function() {
    let that = this;
    let date = new Date()
    this.data.talks.unshift({
      avatarUrl: this.data.faces[Math.floor(Math.random() * this.data.faces.length)],
      nickName:app.globalData.username,
      // nickName: this.data.names[Math.floor(Math.random() * this.data.names.length)],
      content: this.data.inputValue,
      talkTime: this.dateFormat("mm-dd HH:MM:SS", date)
    })
    that.data.inputValue = '';
    that.setData({
      talks: that.data.talks,
      inputValue: that.data.inputValue,
      talksAnimationData: that.animation.export()
    })
 
  },
  dateFormat(fmt, date) { 
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
  }
})