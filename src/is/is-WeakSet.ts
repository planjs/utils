import getType from './get-type';
import { isObjectLike } from './is-Object';

/**
 * 是否为WeakSet
 * @param value
 */
function isWeakSet(value: any): value is WeakSet<any> {
  return isObjectLike(value) && getType(value) === 'WeakSet';
}

export default isWeakSet;
