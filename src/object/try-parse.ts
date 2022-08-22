/**
 * JSON.parse字符串，只会返回对象
 * @param str
 * @param defaultVal
 * @category Object
 */
function tryParse<T extends any>(str: string, defaultVal?: T): T {
  try {
    return JSON.parse(str);
  } catch (err) {}
  return defaultVal! || ({} as T);
}

export default tryParse;
