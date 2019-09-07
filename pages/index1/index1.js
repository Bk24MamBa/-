// pages/index1/index1.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  a:"BK",
  b:24,
  person:{
    name:"BK MamBa",
    age:24,
    number:8,
    height:198,
    hobby:"basketball"
    },
    wlist2: getApp().globalData.wlist,
    wlist3: getApp().globalData.wdtlist
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var time2 = new Date();
    var time3 = time2.valueOf() - 1567354370000;
    var date = new Date().getDate();
    var week = Math.floor(time3 / 86400000 / 7) + 1;
    var day = new Date().getDay();
    if (day < 6) day = day + 1;
    else day = 0;
    var z;
    if (day == "1") { z = "一";week++; }
    if (day == "2") { z = "二" }
    if (day == "3") { z = "三" }
    if (day == "4") { z = "四" }
    if (day == "5") { z = "五" }
    if (day == "6") { z = "六" }
    if (day == "0") { z = "日" }
    this.setData({
      day: z,
      week: week
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showToast({
      title: '1026ms~',
      icon:'',
      duration:1026
    })
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
  
  }
})