/**
 * 检查是否浏览器环境
 */
export function isBrowser() {
  return typeof window === 'object' && window.window === window;
}

/**
 * 检查是否node环境
 */
export function isNode() {
  return typeof process !== 'undefined' && process.release.name === 'node';
}

/**
 * 是否为safari浏览器
 */
export function isSafari(ua = window.navigator.userAgent) {
  return !ua.match(/Chrome/gi) && !!ua.match(/Safari/gi);
}

/**
 * 是否为chrome浏览器
 */
export function isChrome(ua = window.navigator.userAgent) {
  return !!ua.match(/Chrome/gi);
}

/**
 * 是否为firefox浏览器
 */
export function isFirefox(ua = window.navigator.userAgent) {
  return !!ua.match(/Firefox/gi);
}

/**
 * 是否为opera浏览器
 */
export function isOpera(ua = window.navigator.userAgent) {
  return !!ua.match(/Opera/gi);
}

/**
 * 是否为IE浏览器
 */
export function isIE(ua = window.navigator.userAgent.toLowerCase()) {
  return /msie|trident/.test(ua);
}

export function isIE8(ua = window.navigator.userAgent.toLowerCase()) {
  return ua.indexOf('msie 8.0') > 0;
}

export function isIE9(ua = window.navigator.userAgent.toLowerCase()) {
  return ua.indexOf('msie 9.0') > 0;
}

export function isEDGE(ua = window.navigator.userAgent.toLowerCase()) {
  return ua.indexOf('edge/') > 0;
}

/**
 * 是否为IOS系统
 */
export function isIOS(ua = window.navigator.userAgent) {
  return !!ua.match(/iphone|ipad|iPod/gi);
}

/**
 * 是否为Android系统
 */
export function isAndroid(ua = window.navigator.userAgent) {
  return !!ua.match(/android/gi);
}

/**
 * 是否是微信浏览器
 * @param ua
 */
export function isWXBrowser(ua = window.navigator.userAgent) {
  return !!ua.match(/micromessenger/gi);
}

/**
 * 判断是否企业微信浏览器
 * @param ua
 */
export function isWWBrowser(ua = window.navigator.userAgent) {
  return !!ua.match(/wxwork/gi) && isWXBrowser(ua);
}

/**
 * 判断是否微信小程序内的webview
 * @param ua
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
export function isWXMiniProgramWebView(ua = window.navigator.userAgent) {
  return !!ua.match(/miniProgram/gi);
}
