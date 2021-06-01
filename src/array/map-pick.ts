import global from '../global';
import { isFunction } from '../is';
import { get } from '../function';
import type { Dictionary, PropertyPath } from '../type';

function mapPick<
  T extends Dictionary<any>,
  K extends string,
  Value = T[keyof T],
  Item = Record<K, Value>
>(
  arr: T[],
  keyPaths: Record<K, (PropertyPath | keyof T)[]>,
  keyPredicates?: Record<K, (key: K, value: T, index: number, array: T[]) => Value>,
): Item[] {
  const resultKeys = Object.keys(keyPaths);
  return arr.reduce<Item[]>((result, item, index) => {
    result.push(
      resultKeys.reduce<Item>((acc, key) => {
        if (keyPredicates && isFunction(keyPredicates[key])) {
          acc[key] = keyPredicates[key].call(global, key, item, index, arr);
        } else {
          acc[key] = get(item, keyPaths[key]);
        }
        return acc;
      }, {} as Item),
    );
    return result;
  }, []);
}

export default mapPick;
