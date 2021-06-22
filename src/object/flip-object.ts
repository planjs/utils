import type { Dictionary } from '../type';

/**
 * 反转对象key value
 * @param obj
 * @category Object
 */
function flipObject<T extends Dictionary<any>>(obj: T): WeakMap<T[keyof T], keyof T> {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, new WeakMap());
}

export default flipObject;
