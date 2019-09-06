//index.js
//获取应用实例
const app = getApp();
var util=require('../../utils/util.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    hour:0,
    wlist2: getApp().globalData.wlist,
    wlist3: getApp().globalData.wdtlist
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var time2=new Date();
    var time3 = time2.valueOf() - 1567354370000;
    var date=new Date().getDate();
    var week=Math.ceil(time3/86400000/7);
    var day = new Date().getDay();
    var hour = new Date().getHours();
    var z;
    var h;
    if (hour > 1 && hour < 17) { h = "0" }
    if (hour >= 17 && hour < 19) { h = "1" }
    if (hour >= 23 || hour <= 1) { h = "2" }
    if (hour == 19) { h = "3" }
    if (hour == 20) { h = "4" }
    if (hour == 21) { h = "5" }
    if (hour == 22) { h = "6" }
    if (day == "1") { z = "一" }
    if (day == "2") { z = "二" }
    if (day == "3") { z = "三" }
    if (day == "4") { z = "四" }
    if (day == "5") { z = "五" }
    if (day == "6") { z = "六" }
    if (day == "0") { z = "日" }
    this.setData({
      day:z,
      hour:h,
      week:week
    });
  },
  onReady: function () {
    wx.showToast({
      title: '爱你~',
      icon: '',
      duration: 1026
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
