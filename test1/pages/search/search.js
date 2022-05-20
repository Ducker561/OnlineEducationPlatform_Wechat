// pages/index/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:"",
    searchHistoryList: [],
    searchHintList: ["爱", "联想2", "联想3", "联想4","奇"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'searchHistoryList',
      success(res) {    //如果在储存中
        console.log("history in storage");
        that.setData({
          searchHistoryList: res.data,
        })
      },
      fail(res) {      //如果没有在储存中
        console.log("history not in storage");
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
  
  //自定义函数
  //输入框输入
  onSearchBarChange(e){
    this.setData({
      inputText:e.detail.value,
    })
  },
  //删除某条历史数据
  onDeleteTap(e){
    console.log(e.currentTarget.id);
    var newHistoryList = this.data.searchHistoryList;
    newHistoryList.splice(e.currentTarget.id,1);
    this.setData({
      searchHistoryList: newHistoryList,
    })
    wx.setStorage({
      key: 'searchHistoryList',
      data: newHistoryList,
    })
  },
  //删除全部历史数据
  onDeleteAllTap(e){
    this.setData({
      searchHistoryList:[],
    })
    wx.setStorage({
      key: 'searchHistoryList',
      data: [],
    })
  },
  //点击搜索按钮
  onSearchButtonTap(e){
    if(this.data.inputText.length != 0){
      // var newHistoryList = this.data.searchHistoryList;
      // newHistoryList.push(this.data.inputText);    //日后再改
      // this.setData({
      //   searchHistoryList: newHistoryList,
      //   inputText: "",
      // })
      // wx.setStorage({
      //   key: 'searchHistoryList',
      //   data: newHistoryList,
      // })
      let word = this.data.inputText
      var newHistoryList = this.data.searchHistoryList;
      newHistoryList.push(word);    //日后再改
      this.setData({
        searchHistoryList: newHistoryList,
        inputText: "",
      })
      //存入储存
      wx.setStorage({
        key: 'searchHistoryList',
        data: newHistoryList,
      })
      wx.navigateTo({
        url: './searchResult?word=' + word
      })
    }else{
      wx.showToast({
        title: "请点击下方查词结果",
        icon: 'none',
        duration: 1000
      })
    }
  },
  //点击联想的目录
  onPressHint(e){
    let word = this.data.searchHintList[e.currentTarget.dataset.index];
    var newHistoryList = this.data.searchHistoryList;
    newHistoryList.push(word);    //日后再改
    this.setData({
      searchHistoryList: newHistoryList,
      inputText: "",
    })
    //存入储存
    wx.setStorage({
      key: 'searchHistoryList',
      data: newHistoryList,
    })
    //跳转页面
    wx.navigateTo({
      url: './searchResult?word='+word
    })
  },
  //点击历史记录
  onPressHistory(e) {
    let word = this.data.searchHistoryList[e.currentTarget.dataset.index];
    wx.navigateTo({
      url: './searchResult?word=' + word
    })
  },
})