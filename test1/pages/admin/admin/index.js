//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    message1: "管理选项",
    message2: "其他",
    routers: [{
        name: '添加学员',
        url: '../studentadmin/addstudent/addstudent',
        icon: '../../../image/add1.png'
      },
      {
        name: '删除学员',
        url: '../studentadmin/deletestudent/deletestudent',
        icon: '../../../image/del1.png'
      },
      {
        name: '修改学员',
        url: '../studentadmin/editstudent/editstudent',
        icon: '../../../image/edit1.png'
      },
      {
        name: '添加讲师',
        url: '../teacheradmin/addteacher/addteacher',
        icon: '../../../image/add2.png'
      },
      {
        name: '删除讲师',
        url: '../teacheradmin/deleteteacher/deleteteacher',
        icon: '../../../image/del2.png'
      },
      {
        name: '修改讲师',
        url: '../teacheradmin/editteacher/editteacher',
        icon: '../../../image/edit2.png'
      },
      {
        name: '添加课程',
        url: '../courseadmin/addcourse/addcourse',
        icon: '../../../image/add4.png'
      },
      {
        name: '删除课程',
        url: '../courseadmin/deletecourse/deletecourse',
        icon: '../../../image/del3.png'
      },
      {
        name: '修改课程',
        url: '../courseadmin/editcourse/editcourse',
        icon: '../../../image/edit3.png'
      },
    ],

    routers2: [{
        name: '用户列表',
        url: '../showuser/showuser',
        icon: '../../../image/user.png'
      },
      {
        name: '重置密码',
        url: '../passwordreset/passwordreset',
        icon: '../../../image/mima.png'
      },
      {
        name: '修改密码',
        url: '../../forget/forget',
        icon: '../../../image/edit.png'
      },
      {
        name: '退出系统',
        url: '../../userlogin/userlogin',
        icon: '../../../image/tcxt.png'
      },
      {
        name: '待扩充',
        url: '../none/none',
        icon: '../../../image/add3.png'
      },
      {
        name: '待扩充',
        url: '../none/none',
        icon: '../../../image/add3.png'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})