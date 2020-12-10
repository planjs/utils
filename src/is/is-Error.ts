import getType from './get-type';

/**
 * 是否为Error类型
 * @param value
 */
function isError(value: any): value is Error {
  return getType(value) === 'Error';
}

export default isError;
