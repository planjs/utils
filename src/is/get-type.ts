/**
 * 获取数据类型
 * @param value
 * @category Is
 */
function getType(value: any) {
  const toString = Object.prototype.toString;
  if (value == null) {
    return value === undefined ? 'Undefined' : 'Null';
  }
  return toString
    .call(value)
    .replace(/^\[object/, '')
    .replace(/\]$/, '')
    .trim();
}

export default getType;
