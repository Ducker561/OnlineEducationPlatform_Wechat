var app = getApp();
Page({
    data: {

    },
    formSubmit: function (e) {
        wx.showModal({
            title: '提示',
            content: '确定要提交吗?',

            success(res) {
                var that = this;
                var username = e.detail.value.username;
                var password = e.detail.value.password;
                var password2 = e.detail.value.password2;
                if (password != password2) {
                    wx.showToast({
                        title: '输入密码不一致',
                        icon: 'loading'
                    })
                    return;
                }
                if (res.confirm) {
                    wx.request({
                        url: "http://localhost:8080/wxadmin/wxuserPasswordRest",
                        data: {
                            'username': username,
                            'password': password
                        },
                        header: {
                            'content-type': 'application/x-wwww-form-urlencoded'
                        },
                        success: function (res) {
                            if (res.data.userPasswordRest == "true") {
                                wx.showToast({
                                    title: '修改成功',
                                    duration: 3000
                                })
                            } else {
                                wx.showToast({
                                    title: '修改失败',
                                    duration: 3000,
                                    icon:'loading'
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