/**
 * 蛇形转换成驼峰
 * @param s
 */
export function toCamelCase(s: string) {
  let camel = '';
  let nextCap = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
}

/**
 * 首字母大写
 * @param s
 */
export function toFirstUpperCase(s: string) {
  return s.replace(/^\S/, (s) => s.toUpperCase());
}
