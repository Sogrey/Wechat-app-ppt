// pages/index/index.js
var _translateUtils = require('../../utils/translateUtils.js')


Page({
  data: {
    text: "",
    hidden: true,
    resData:{}
  },

  inputTextChanged: function (e) {
    var txt = e.detail.value;
    // console.log(txt);
    this.setData({
      text: txt
    });
  },

  doTranslate: function () {
    var thiz = this;
    //获input中的文本
    var txt = thiz.data.text;
    // console.log(txt);
    if (txt) {//关键字不为空
      thiz.setData({ hidden: false});
      //访问有道接口
      _translateUtils.getTranslate(txt, function (res) {
         console.log(JSON.stringify(res.data));
         thiz.setData({ resData: res.data,hidden:true});
      })
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})