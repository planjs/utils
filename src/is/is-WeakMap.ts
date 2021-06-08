import getType from './get-type';
import { isObjectLike } from './is-Object';

/**
 * 是否为WeakMap
 * @param value
 */
function isWeakMap(value): value is WeakMap<any, any> {
  return isObjectLike(value) && getType(value) === 'WeakMap';
}

export default isWeakMap;
