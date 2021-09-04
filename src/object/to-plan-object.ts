/**
 * 转换成对象
 * @param value
 * @category Object
 */
function toPlanObject(value?: any): Object {
  value = Object(value);
  const result = {};
  for (const k in value) {
    result[k] = value[k];
  }
  return result;
}

export default toPlanObject;
