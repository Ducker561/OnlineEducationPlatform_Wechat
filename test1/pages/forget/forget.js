Page({

    /**
     * 页面的初始数据
     */
    data: {
        
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
        var username = e.detail.value.username;
        var oldPassword = e.detail.value.oldPassword;
        var password = e.detail.value.password;
        var password2 = e.detail.value.password2;
        if (username == "" || oldPassword == "" || password == "" || password2 == "") {
            wx.showToast({
                title: '输入不能为空',
                icon: 'loading'
            })
            return;
        }
        if (password != password2) {
            wx.showToast({
                title: '输入密码不一致',
                icon: 'loading'
            })
            return;
        }
        wx.showModal({
            title: '提示',
            content: '确定要提交吗?',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxpasswordRset",
                        data: {
                            'username': username,
                            'oldPassword': oldPassword,
                            'password': password,
                        },
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (res) {
                            if (res.data.password == "true") {
                                wx.showToast({
                                    title: '修改成功',
                                    duration: 3000,
                                    icon: 'success'
                                })
                                console.log(res.data.username)
                            } else {
                                wx.showToast({
                                    title: '修改失败',
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