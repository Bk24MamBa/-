Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist1:getApp().globalData.wlist
  },
  showCardView: function (e) {
    var app = getApp();
    app.globalData.index = e.currentTarget.id;
    console.log(app.globalData.index);
    wx.navigateTo({
      url: '../setSubject/setSubject?id='
    });
  },
  Wdt() {
    wx.navigateTo({
      url: '../wdtsubject/wdtsubject',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var kcxx = wx.getStorageSync('kcxx');
    // var skcd = wx.getStorageSync('skcd');
    // // this.setData({ kcxx: kcxx });
    // wlist[1].kcxx=wx.getStorageSync("kcxx");
    // // this.setData({ skcd: skcd });
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
    // var kcxx = wx.getStorageSync('kcxx');
    // var skcd = wx.getStorageSync('skcd');
    // // this.setData({ kcxx: kcxx });
    // wlist[1].kcxx = wx.getStorageSync("kcxx");
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