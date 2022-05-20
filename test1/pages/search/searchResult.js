// pages/index/searchResult.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    explaination: [],
    word:"",
    pronList: [],
    valid:false,
    isLike: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受上个页面点击的单词
    console.log(options.word);
    //从后端获取词条信息
    var that = this;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/findword?word=${options.word}`,
      method: "GET",
      success(res){
        console.log(res.data);
        if(res.data.length != 0){
          let pronList = [];
          for(let ex of res.data){
            // console.log(ex)
            if(!pronList.includes(ex.pronunciation)) pronList.push(ex.pronunciation);
          }
          that.setData({
            pronList: pronList,
            word: options.word,
            explaination: res.data,
            valid:true,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  clickFavor(e) {
    var that = this;
    let dictID = this.data.explaination[0].id;
    let isLike = this.data.isLike?0:1;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/pushlike_dict?userID=${app.globalData.userID}&dictID=${dictID}&like=${isLike}`,
      method: "GET",
      success(res) {
        that.setData({
          isLike: isLike
        })
        wx.showToast({
          title: isLike ? "已收藏" : "已取消",
          icon: 'success',
          duration: 500
        })
      }
    })
  },
})