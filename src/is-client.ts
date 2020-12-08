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
