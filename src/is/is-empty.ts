import { isArrayLike } from './is-Array';
import getType from './get-type';
import isPrototype from './is-Prototype';
import isArguments from './is-Arguments';
import isTypedArray from './is-TypedArray';

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 检查是否空对象
 * @param value
 */
function isEmpty(value: any): boolean {
  if (value == null) {
    return true;
  }
  // array
  if (
    isArrayLike(value) &&
    (Array.isArray(value) || typeof value === 'string' || isTypedArray(value) || isArguments(value))
  ) {
    return !value.length;
  }
  // map
  const type = getType(value);
  if (type === 'Map' || type === 'Set') {
    return !value.size;
  }
  // object
  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

export default isEmpty;
