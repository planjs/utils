/**
 * 去除字符串中所有空格
 * @param str
 */
export function trimAll(str: string) {
  return str.replace(/\s+/g, '');
}

/**
 * 去除字符串前面空格
 * @param str
 */
export function trimStart(str: string) {
  return str.replace(/(^\s*)/g, '');
}

/**
 * 去除字符串后面空格
 * @param str
 */
export function trimEnd(str: string) {
  return str.replace(/(\s*$)/g, '');
}
