/**
 * 判断是否NaN
 * @param value
 * @category Is
 */
function isNaN(value: any): value is number {
  // eslint-disable-next-line
  return value !== value;
}

export default isNaN;
