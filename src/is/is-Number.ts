import getType from './get-type';

/**
 * 判断是否为number
 * @param value
 */
function isNumber(value: any): value is number {
  return getType(value).toLowerCase() === 'number';
}

export default isNumber;
