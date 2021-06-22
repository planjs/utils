const defaultUA = isBrowser() ? window.navigator.userAgent : '';

/**
 * 检查是否浏览器环境
 * @category Is
 */
export function isBrowser() {
  return typeof window === 'object' && window.window === window;
}

/**
 * 检查是否node环境
 * @category Is
 */
export function isNode() {
  return typeof process !== 'undefined' && process.release.name === 'node';
}

/**
 * 是否为safari浏览器
 * @category Is
 */
export function isSafari(ua = defaultUA) {
  return !ua.match(/Chrome/gi) && !!ua.match(/Safari/gi);
}

/**
 * 是否为chrome浏览器
 * @category Is
 */
export function isChrome(ua = defaultUA) {
  return !!ua.match(/Chrome/gi);
}

/**
 * 是否为firefox浏览器
 * @category Is
 */
export function isFirefox(ua = defaultUA) {
  return !!ua.match(/Firefox/gi);
}

/**
 * 是否为opera浏览器
 * @category Is
 */
export function isOpera(ua = defaultUA) {
  return !!ua.match(/Opera/gi);
}

/**
 * 是否为IE浏览器
 * @category Is
 */
export function isIE(ua = defaultUA) {
  return /msie|trident/.test(ua.toLowerCase());
}

/**
 * 是否IE8
 * @param ua
 * @category Is
 */
export function isIE8(ua = defaultUA) {
  return ua.toLowerCase().indexOf('msie 8.0') > 0;
}

/**
 * 是否IE9
 * @param ua
 * @category Is
 */
export function isIE9(ua = defaultUA) {
  return ua.toLowerCase().indexOf('msie 9.0') > 0;
}

/**
 *
 * @param ua
 * @category Is
 */
export function isEDGE(ua = defaultUA) {
  return ua.toLowerCase().indexOf('edge/') > 0;
}

/**
 * 是否为IOS系统
 * @category Is
 */
export function isIOS(ua = defaultUA) {
  return !!ua.match(/iphone|ipad|iPod/gi);
}

/**
 * 是否为Android系统
 * @category Is
 */
export function isAndroid(ua = defaultUA) {
  return !!ua.match(/android/gi);
}

/**
 * 是否是微信浏览器
 * @param ua
 * @category Is
 */
export function isWXBrowser(ua = defaultUA) {
  return !!ua.match(/micromessenger/gi);
}

/**
 * 判断是否企业微信浏览器
 * @param ua
 * @category Is
 */
export function isWWBrowser(ua = defaultUA) {
  return !!ua.match(/wxwork/gi) && isWXBrowser(ua);
}

/**
 * 判断是否微信小程序内的webview
 * @param ua
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 * @category Is
 */
export function isWXMiniProgramWebView(ua = defaultUA) {
  return !!ua.match(/miniProgram/gi);
}

/**
 * 判断是否暗黑模式
 * @category Is
 */
export function isPrefersDarkMode() {
  if (!isBrowser()) {
    throw new Error('Can only be used on the node side.');
  }
  return window.matchMedia('(prefers-color-scheme: dark)');
}
