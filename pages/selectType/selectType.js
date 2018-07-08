// pages/selectType/selectType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [
      { name: 'Career', value: '事业' },
      { name: 'Family', value: '家庭', checked: 'true' },
      { name: 'Child', value: '子女' },
      { name: 'Health', value: '身体' },
      { name: 'Love', value: '恋爱' },
      { name: 'Parent', value: '父母' },
      { name: 'Friends', value: '朋友' },
      { name: 'Others', value: '其他' },
    ]
  },
  
  //事件处理函数
  toSelectCard: function () {
    wx.navigateTo({
      url: '../selectCard/selectCard'
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
  
  }
})