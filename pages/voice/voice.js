var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    loadingHidden: false,
    page: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
  },
  onShow: function () {
  },
  bindscrolltoupper: function () {
    console.log(2)
  },
  lower: function (e) {
    console.log(e)
    this.requestData();
  },
  requestData: function (a) {
    var that = this;
    this.setData({
      page: this.data.page + 1
    })
    wx.request({
      url: 'https://route.showapi.com/255-1',
      data: {
        'showapi_appid': 27982,
        'showapi_sign': "495a1755b3184e4f8dfe30f818eb1a5e",
        'page': that.data.page,
        'type': 10
      },
      method: 'Get',
      success: function (res) {
        let needInfor = res.data.showapi_res_body.pagebean.contentlist;
        console.log(needInfor)
        that.setData({
          list: that.data.list.concat(needInfor),
          loadingHidden: true
        })
      },
      fail: function (err) {
        console.log("错误原因:" + err)
      }
    })

  }

})