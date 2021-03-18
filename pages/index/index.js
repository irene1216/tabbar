// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  
  copyUrl: function(){
    wx.setClipboardData({
      data: 'https://developers.weixin.qq.com/miniprogram/dev/extended/weui/tabbar.html',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})