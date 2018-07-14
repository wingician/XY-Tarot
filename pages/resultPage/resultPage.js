// pages/resultPage/resultPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //卡牌名
  cardName:{"card01":"aa","card11":"正义 Justice"
  
  },
  //卡牌关键字
  cardKeyword:{"card11":"公正、均衡、责任"

  },
  //卡牌星座
  cardZodiac:{"card11":"天秤座"},


  //卡牌四元素
  cardElement: { "card11":"风元素" },


  //牌面象征
  cardSyble: { "card11": "冥想中的正义女神，身着红袍、头戴金冠，端坐在石凳上。她左手提着天秤象征能对一切是非做出公正的裁决；右手高举利剑则寓意矫正世间一切歪曲与虚伪的能力。女神左脚微微向外踏出，似乎想要站起，但右脚却还隐匿在袍中，似乎是在为做出公正裁决而犹豫不决，预示想要维系公正的判断绝非易事，只有适当的协调他人与自我的对立，时时洞察反省自我，利器与天秤才能发挥其真正的意义。" },

  //牌面含义 小于22为正面，后面的是号码 - 22. 第0张移动到第22张。
  cardMean: {
    "card11": "基本含义——诚实、公证、为他人调解争端、维系平衡、兼顾事业与家庭（学业与恋情）、爱好和平。 恋爱婚姻——理性交往、好性情、喝温文有力的对象交往、恋爱双方彼此平衡、轻松的交往、诚实的恋情、真心的交往、学业与恋情兼顾。工作学业——各科成绩出众、事业与家庭兼顾、以合理的计划获得成功、个人学业与社团活动兼顾、适合法律相关工作。人际财富——公平待人、适合担任解决争端的角色、重义气、受到交往对象的照顾、贷款获准、财运攀升、得到应有的回报。健康生活——身材匀称、精神状态稳定、适合情人装打扮。娱乐兴趣——音乐相关的事物能够开拓心情。",
    "card33": "基本含义——不公平、有始无终、以自己的意见去断定、事事不能两全、不均衡。恋爱婚姻——不够主动、彼此个性不合、不顾后果的交往、脚踏两支船、单相思、第三者插足、对待恋情不够诚实、与异性交往暧昧不清。工作学业——偏科现象严重、墨守成规以致失败、缺乏能力或自信、行为不检点、考试失误。 人际财富——缺乏道德观念、懒好人、左右为难、对朋友过于挑剔、财务危机、财不露白、遭遇债务纠纷。健康生活——身材不匀称、无法控制体重、偏食。娱乐兴趣——对逛街购物已赶乏味、对任何事物都无法产生长久兴趣"

  },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var selectedCard = wx.getStorageSync('selectedCard');
    this.setData({ "selectedCard": selectedCard});
    var cardNumberStart = selectedCard.indexOf('card');
    cardNumberStart = cardNumberStart + 4;
    var cardNumberEnd = selectedCard.indexOf('.jpg');
    var cardNumber = selectedCard.substring(cardNumberStart, cardNumberEnd);
    var cardStatus = "正位";
    if (cardNumber > 22){
      cardStatus = "逆位";
      cardNumber = cardNumber - 22;
    }
    this.setData({ "cardNumber": cardNumber });
    this.setData({ "cardStatus": cardStatus });
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