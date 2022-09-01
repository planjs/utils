/**
 * JSON.parse字符串
 * @param str
 * @param defaultVal
 */
function tryParse<T extends any>(str: string, defaultVal?: T): T {
  if (str == null) return defaultVal!;
  try {
    return JSON.parse(str);
  } catch (err) {}
  return defaultVal!;
}

export default tryParse;
