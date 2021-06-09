import getType from './get-type';

/**
 * 判断是否argument对象
 * @param value
 */
function isArguments(value: any): value is IArguments {
  return getType(value) === 'Arguments';
}

export default isArguments;
