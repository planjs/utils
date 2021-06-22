import type { Dictionary } from '../type';

/**
 * 遍历obj返回新的对象
 * @param obj
 * @param predicate
 * @category Object
 */
function mapObject<U extends Record<keyof T, any>, T extends Dictionary<any>>(
  obj: T,
  predicate: (key: keyof T, value: T[keyof T], obj: T) => U[keyof U],
): U {
  return Object.keys(obj).reduce<U>((acc, key) => {
    acc[key as keyof U] = predicate(key, obj[key], obj);
    return acc;
  }, {} as U);
}

export default mapObject;
