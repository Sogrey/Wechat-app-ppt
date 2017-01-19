var _config = require('../config.js')

function getTranslate(keyWord, callback) {
    //微信的网络请求
    wx.request({
        url: 'http://fanyi.youdao.com/openapi.do?keyfrom=' + _config.keyfrom + '&key=' + _config.APIKey + '&type=data&doctype=json&version=1.1&q=' + keyWord,
        success: function (res) {
            // console.log(res);
            callback(res);
        }
    })
}

module.exports = {
  getTranslate: getTranslate
}