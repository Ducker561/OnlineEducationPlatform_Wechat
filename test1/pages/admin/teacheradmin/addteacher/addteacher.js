// pages/admin/teacheradmin/addteacher/addteacher.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items:[
            {name:'男',value:'男'},
            {name:'女', value:'女'}
        ],
        items2:[
            {name:'本科',value:'本科'},
            {name:'硕士',value:'硕士'},
            {name:'博士',value:'博士'}
        ],
        birthyear:'点击选择',
        grade:'点击选择'
    },
    radioChange:function(e){
        this.setData({
            sex:e.detail.value
        })
    },
    radioChange2:function(e) {
        this.setData({
          degree:e.detail.value
        })
      },
    bindDateChange(e){
        this.setData({
            birthyear:e.detail.value
        })
    },
    bindTimeChange(e){
        this.setData({
            grade:e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    formSubmit: function (e) {
        var that = this;
        var userid = e.detail.value.userid;
        var username = e.detail.value.username;
        var sex = this.data.sex;
        var birthyear = this.data.birthyear;
        var degree = this.data.degree;
        var title = e.detail.value.title;
        var grade = this.data.grade;
        var collegeid = e.detail.value.collegeid;
        wx.showModal({
            title: '提示',
            content: '确定要提交吗?',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxadmin/wxaddTeacher",
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
                            if (res.data.addteacher == "true") {
                                wx.showToast({
                                    title: '添加成功',
                                    duration: 3000,
                                    icon: 'success'
                                })
                            } else {
                                wx.showToast({
                                    title: '添加失败',
                                    duration: 3000,
                                    icon: 'loading'
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