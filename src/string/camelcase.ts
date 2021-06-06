/**
 * 转换为驼峰
 * @param str
 * @example
 * hello-word -> helloWord
 */
function camelcase(str: string) {
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
}

export default camelcase;
