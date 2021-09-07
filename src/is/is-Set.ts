import getType from './get-type';

/**
 * 是否为Set类型
 * @param value
 * @category Is
 */
function isSet(value: any): value is Set<any> {
  return getType(value) === 'Set';
}

export default isSet;
