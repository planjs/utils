import global from '../global';
import { isFunction } from '../is';
import { get } from '../function';

import type { Dictionary, PropertyPath } from '../type';

/**
 * 从数组对象中获取指定的值，返回新的数组
 * @param array {Array<Object>>}
 * @param keyPaths {<key, PropertyPath>} key 返回对象key, path 对象中值的key
 * @param keyPredicates {<key, predicate>} key 返回对象key, predicate 返回需要的值
 * @example
 * ```ts
 * const list = [{ id: 1, name: 'bob' }, { id: 2, name: 'sam' }]
 * mapPick(list, { label: ['name'], value: ['id'] })
 * // [{ label: 'bob', value: 1 }, { label: 'sam', value: 2 }]
 * ```
 * @category Array
 */
function mapPick<
  T extends Dictionary<any>,
  K extends string,
  Value = T[keyof T],
  Item = Record<K, Value>
>(
  array: readonly T[],
  keyPaths?: Record<K, (PropertyPath | keyof T)[]>,
  keyPredicates?: Record<K, (key: K, value: T, index: number, array: readonly T[]) => Value>,
): Item[] {
  const resultKeys = Object.keys(keyPaths || keyPredicates || {});
  if (!resultKeys.length) {
    return [];
  }
  return array.reduce<Item[]>((result, item, index) => {
    result.push(
      resultKeys.reduce<Item>((acc, key) => {
        if (keyPredicates && isFunction(keyPredicates[key])) {
          acc[key] = keyPredicates[key].call(global, key, item, index, array);
        } else if (keyPaths && keyPaths[key]) {
          acc[key] = get(item, keyPaths[key]);
        }
        return acc;
      }, {} as Item),
    );
    return result;
  }, []);
}

export default mapPick;
