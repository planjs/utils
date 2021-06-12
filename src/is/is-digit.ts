/**
 * 是否为数字
 * @note 字符串数字也是数字
 * @param value
 */
function isDigit(value): value is number | string {
  const pattern = /^[0-9]*$/;
  return !(pattern.exec(value) === null || value === '');
}

export default isDigit;
