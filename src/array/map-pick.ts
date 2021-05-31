import { Dictionary, PropertyPath } from '../type';
import { isFunction } from '../is';
import { get } from '../function';
import global from '../global';

function mapPick<T extends Dictionary<any>, K extends string>(
  arr: T[],
  keyPaths: Record<K, (PropertyPath | keyof T)[]>,
  keyPredicates?: Record<K, (key: K, value: T, index: number, array: T[]) => T[keyof T]>,
): Record<K, T[keyof T]>[] {
  const resultKeys = Object.keys(keyPaths);
  return arr.reduce<Record<K, T[keyof T]>[]>((result, item, index) => {
    result.push(
      resultKeys.reduce<Record<K, T[keyof T]>>((acc, key) => {
        if (keyPredicates && isFunction(keyPredicates[key])) {
          acc[key] = keyPredicates[key].call(global, key, item, index, arr);
        } else if (keyPaths[key]) {
          acc[key] = get(item, keyPaths[key]);
        }
        return acc;
      }, {} as Record<K, T[keyof T]>),
    );
    return result;
  }, []);
}

export default mapPick;
