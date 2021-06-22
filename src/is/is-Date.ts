import getType from './get-type';

/**
 * 判断是否为Date对象
 * @param value
 * @category Is
 */
function isDate(value: any): value is Date {
  return getType(value) === 'Date';
}

export default isDate;
