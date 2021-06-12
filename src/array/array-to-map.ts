import get from '../function/get';
import type { Dictionary, PropertyPath } from '../type';

/**
 * 对象数组，指定值作为map的key
 * @param array {T[]}
 * @param paths {keyof T}
 * @return {{ [string] : T }}
 */
function arrayToMap<T extends Dictionary<any>>(array: T[], paths: PropertyPath[]) {
  return array.reduce<Record<string, T>>((acc, item) => {
    acc[get(item, paths)!] = { ...item };
    return acc;
  }, {});
}

export default arrayToMap;
