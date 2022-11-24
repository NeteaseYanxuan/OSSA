var ua = navigator.userAgent;
/**
 * 判断是否是微信
 * @constant
 */
 const isWeixin = /MicroMessenger/i.test(ua);
 /**
  * 判断是否是支付宝
  * @constant
  */
 const isAlipay = /AlipayClient/i.test(navigator.userAgent);
/**
 * 判断是否是支付宝小程序
 * @constant
 */
const isAlipayMiniApp = isAlipay && /miniProgram/i.test(navigator.userAgent);
 /**
  * 判断是否是微信小程序
  * @constant
  */
const isWeixinMiniApp = window.__wxjs_environment === 'miniprogram' || (isWeixin && /miniProgram/i.test(navigator.userAgent));

const isWeiXinDevApp = /wechatdevtools/i.test(ua);
 /**
  * 判断是否是字节小程序
  * @constant
  */
 const isToutiaoMiniApp = /toutiaomicroapp/i.test(navigator.userAgent);
 /**
  * 判断是否是小程序中
  * @constant
  */
const isMiniApp = isWeixinMiniApp || isToutiaoMiniApp || isAlipayMiniApp;

 export default {
  isWeixin,
  isAlipay,
  isAlipayMiniApp,
  isWeixinMiniApp,
  isToutiaoMiniApp,
  isMiniApp
 }