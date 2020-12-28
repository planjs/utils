import getType from './get-type';

/**
 * 判断是否为string
 * @param value
 */
function isString(value: any): value is string {
  return getType(value) === 'string';
}

export default isString;
