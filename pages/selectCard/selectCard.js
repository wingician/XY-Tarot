// pages/selectCard/selectCard.js
//获取应用实例
var app = getApp()
var allCard = ['card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
  'card10',
  'card11',
  'card12',
  'card13',
  'card14',
  'card15',
  'card16',
  'card17',
  'card18',
  'card19',
  'card20',
  'card21',
  'card22',
  'card23',
  'card24',
  'card25',
  'card26',
  'card27',
  'card28',
  'card29',
  'card30',
  'card31',
  'card32',
  'card33',
  'card34',
  'card35',
  'card36',
  'card37',
  'card38',
  'card39',
  'card40',
  'card41',
  'card42',
  'card43',
  'card44'];
var backCardImage = "../images/cardbg.jpg"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardNumber:0,
    clickNum: 0,      // 点击次数
    checked: 0,       // 已匹配牌数
    allCard: allCard,    // 全部卡牌数组
    backImage: backCardImage, // 牌背面 图片地址
    firstX: -1,        // 点击的第一张卡牌的坐标 
    firstY: -1,
    cards: [],        // 随机挑选出来的牌   
    size: 44,        // 界面显示的牌数=size*2
    clickable: false,    // 当前是否可点击

  },


startGame: function () {  // 开始游戏
    var data = this.data;
    var that = this;
    console.log('startGame');
    var tmp = this.data.allCard.sort(
      function (a, b) { return Math.random() > .5 ? -1 : 1; });// 打乱牌堆

    // 添加src,state,转成二维数组方面展示
    var cards = [];
    var ix = -1; var iy = 0;
    for (var i in tmp) {
      if (i % 7 == 0) {
        cards.push([]);
        ix++; iy = 0;
      }
      cards[ix].push({
        src: '../images/' + tmp[i] + '.jpg',
        state: 0   // 为1时显示图片,为0时显示牌背面
      });
    }
    this.data.cards = cards;
    this.setData({
      cards: cards,
      clickNum: 0,
      checked: 0,
      firstX: -1,
      clickable: false
    });


    var that = this;
    that.turnAllBack();  // 所有的牌翻到背面
    console.log('turn all back');
    data.clickable = true; // 可以开始翻牌
   
  },


  onTap: function (event) {
    var that = this;
    var data = this.data;
    var ix = event.currentTarget.dataset.ix; // 获取点击对象的坐标
    var iy = event.currentTarget.dataset.iy;
    console.log('onTap ' + ix + ' ' + iy);
    if (data.cards[ix][iy].state != 0 || !data.clickable)  // 点击的不是未翻过来的牌或者现在不让点直接pass
      return;
    that.setData({ clickNum: ++data.clickNum }); //点击数加1   
    // 1. 检测是翻过来的第几张牌
    if (data.firstX == -1) {
      // 1.1 第一张修改状态为 1
      data.cards[ix][iy].state = 1;
      data.firstX = ix; data.firstY = iy;  // 记下坐标
      that.setData({ cards: data.cards });     // 通过setData让界面变化
      //选中的牌传给下个页面
      wx.setStorageSync("selectedCard", data.cards[ix][iy].src);
      wx.navigateTo({ url: '../resultPage/resultPage' });
    } 
    console.log(this.data.cards);
  }, 
  
  turnAllBack: function () {
    for (var ix in this.data.cards)
      for (var iy in this.data.cards[ix])
        this.data.cards[ix][iy].state = 0;
    this.setData({ cards: this.data.cards });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '欣月塔罗'
    });
    this.startGame();
    console.log(this.data.cards);    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.cardNumber = this.random();
    console.log("onShow");
    this.startGame();
    
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
  
  },

  /**
   * 产生随机数
   */
  random:function(){
    var max = 0;
    var min = 44;
    var diff = max - min;
    var number = Math.ceil(Math.random() * diff + min);
    return number;
  },

result: function () {
  wx.setStorageSync("cardNumber", this.data.cardNumber);
  wx.navigateTo({ url: '../resultPage/resultPage'})
  },

turn:function(elem){
  var cls = elem.className;
  //判断“photo_front”是否在cls中
  if( /photo_front /.test(cls)){   
  //判断“photo_front”是否在cls中
  cls = cls.replace(/photo_front/, 'photo_back')
}else{
  cls = cls.replace(/photo_back/, 'photo_front')
}
return elem.className = cls;
},

startMSG:function(){
  wx.showToast({
    title: '静下心来，心中默念，然后选择一张塔罗牌',
    icon: 'loading',
    duration: 1500
  })

}

})

