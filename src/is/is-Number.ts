import getType from './get-type';

/**
 * 判断是否为number
 * @param value
 * @category Is
 */
function isNumber(value: any): value is number {
  return getType(value) === 'Number';
}

export default isNumber;
