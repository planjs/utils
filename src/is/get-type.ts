/**
 * 获取数据类型
 * @param value
 */
function getType(value: any) {
  const toString = Object.prototype.toString;
  return toString
    .call(value)
    .replace(/^\[object/, '')
    .replace(/\]$/, '')
    .trim();
}

export default getType;
