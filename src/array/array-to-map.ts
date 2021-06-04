import get from '../function/get';
import type { Dictionary, PropertyPath } from '../type';

/**
 * 对象数组，指定值作为map的key
 * @param arr {T[]}
 * @param paths {keyof T}
 * @return {{ [string] : T }}
 */
function arrayToMap<T extends Dictionary<any>>(arr: T[], paths: PropertyPath[]) {
  return arr.reduce<Record<string, T>>((acc, item) => {
    acc[get(item, paths)!] = { ...item };
    return acc;
  }, {});
}

export default arrayToMap;
