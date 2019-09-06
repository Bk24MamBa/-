//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getInfo: function (words, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/search/',
      data: {
        word: words
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  },
  getSen: function (wordsid, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/example/',
      data: {
        vocabulary_id: wordsid,
        "type": "sys"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  // 获得快递运单信息 com：快递公司简称，no：快递单号，cb：方法
  getExpressInfo: function (com, no, cb) {
    // https请求
    wx.request({
      url: 'http://v.juhe.cn/exp/index?com=' + com + '&no=' + no + '&dtype=&key=16d0d5308da06ace4bee7e3cf3e32fe2',
      data: {
        x: '',
        y: ''
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        cb(res.data)
      }
    })
  },
  globalData: {
    index: null,
    wlist: [
      //上课长度全部默认为两节课
      { "xqj": 1, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 6, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,14,15,16], "kcxx": "数值分析 C4-302 1~10周  Web编程 B3-516 14~16周" },
      { "xqj": 1, "sksj": 8, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13],"kcxx": "Web编程 C4-408 1~13周" },
      { "xqj": 1, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 1, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],"kcxx": "编译原理 C4-302 1~12周" },
      { "xqj": 2, "sksj": 3, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],"kcxx": "数据库系统原理 C4-112 1~13周" },
      { "xqj": 2, "sksj": 6, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16],"kcxx": "操作系统 C3-104 1~12周 B3-516 13~16周" },
      { "xqj": 2, "sksj": 8, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8],"kcxx": "计算机接口技术 C4-308 1~8周" },
      { "xqj": 2, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 1, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],"kcxx": "操作系统 C3-104 1~12周" },
      { "xqj": 3, "sksj": 3, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],"kcxx": "编译原理 C4-302 1~12周" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 6, "skcd": 2, "zhou": [1,2,3,4,5,6,7,8,9,10],"kcxx": "数据库系统原理 C4-112 1~10周" },
      { "xqj": 4, "sksj": 8, "skcd": 2, "zhou":[11,12,13,14,15],"kcxx": "数据库系统原理 B3-514 11~15周" },
      { "xqj": 4, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 1, "skcd": 2, "zhou": [6, 7, 8],"kcxx": "计算机接口技术 B3-502 6~8周" },
      { "xqj": 5, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "zhou": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],"kcxx": "数值分析 C4-302 1~10周" },
      { "xqj": 5, "sksj": 8, "skcd": 2, "zhou": [1, 2, 3, 4, 5],"kcxx": "计算机接口技术 C4-308 1~5周" },
      { "xqj": 5, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 12, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 1, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 3, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 8, "skcd": 2, "kcxx": "  " },
      { "xqj": 7, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 7, "sksj": 12, "skcd": 2, "kcxx": " " }
    ],
    wdtlist: [
      //上课长度全部默认为两节课
      { "xqj": 1, "sksj": 1, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "动物性食品卫生学 曾楼408 1~4 6~9周" },
      { "xqj": 1, "sksj": 3, "skcd": 2, "zhou": [6, 7, 8, 9, 10, 11, 12, 13],"kcxx": "普通生态学----- 曾楼208 6~13周" },
      { "xqj": 1, "sksj": 6, "skcd": 2, "zhou": [6, 7, 8, 9, 10, 11, 12, 13],"kcxx": "宠物疾病防治--- 曾楼208 6~13周" },
      { "xqj": 1, "sksj": 8, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "家禽生产学----- 曾楼408 1~4 6~9周" },
      { "xqj": 1, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 3, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "猪生产学 曾楼210 1~4 6~9周" },
      { "xqj": 2, "sksj": 6, "skcd": 2, "zhou": [6, 7, 8, 9, 10, 11],"kcxx": "动物环境卫生学 曾楼408 6~11周" },
      { "xqj": 2, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 3, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "动物性食品卫生学 曾楼408 1~4 6~9周" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "家禽生产学----- 曾楼408 1~4 6~9周" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 1, "skcd": 2, "zhou": [6, 7, 8, 9, 10, 11, 12, 13],"kcxx": "普通生态学----- 曾楼408 6~13周" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 3, "skcd": 2, "zhou": [1, 2, 3, 4, 6, 7, 8, 9],"kcxx": "猪生产学 曾楼210 1~4 6~9周" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "zhou": [6, 7, 8, 9, 10, 12, 13, 14],"kcxx": "动物性食品卫生学 曾楼408 6~11周 实B501 12~14周" },
      { "xqj": 5, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 12, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 1, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 3, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 8, "skcd": 2, "kcxx": "  " },
      { "xqj": 7, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 7, "sksj": 12, "skcd": 2, "kcxx": " " }
    ]
  }
})