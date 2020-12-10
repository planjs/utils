import { MAX_ARRAY_INDEX } from '../constant';
import getType from './get-type';

/**
 * 是否为Array类型
 * @param value
 */
function isArray<T, S>(value: Array<T> | S): value is Array<T> {
  return Array.isArray ? Array.isArray(value) : getType(value) === 'Array';
}

/**
 * 是否为一个类数组
 * @param value
 */
export function isArrayLike<T, S>(value: ArrayLike<T> | S): value is ArrayLike<T> {
  const shallowProperty = function (key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };
  const getLength = shallowProperty('length');
  const length = getLength(value);
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

export default isArray;
