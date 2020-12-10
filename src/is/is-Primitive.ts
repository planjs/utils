/**
 * 判断是否原始数据类型
 * @param value
 */
function isPrimitive(value): value is string | number | symbol | boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}

export default isPrimitive;
