import wxSdk from 'weixin-js-sdk'  //h5分享用到
import {getSignPackage} from './api'
var Shares = {
  // h5分享功能
  shareCode: function (imgurl, title, desc, link, callback,) {
    var url = window.location.href
    let arr = {
      url: url
    }
    getSignPackage(arr).then((res) => {
      wxSdk.config({
        // debug: true,
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名，见附录1
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wxSdk.ready(function () {
        console.log('------------------------------')
        // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
        wxSdk.updateAppMessageShareData({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: imgurl, // 分享图标
          success: function (res) {
            console.log(res, 'success')
            // 用户确认分享后执行的回调函数
            if (callback) {
              callback('success');
            }
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log('erroe')
            if (callback) {
              callback('cancel');
            }
          }
        });
        wxSdk.updateTimelineShareData({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: link, // 分享链接
          imgUrl: imgurl, // 分享图标
          success: function (res) {
            // 用户确认分享后执行的回调函数
            if (callback) {
              callback('success', res);
            }
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            if (callback) {
              callback('cancel');
            }
          }
        });
      })
    })
  }
}
export {
  Shares
}