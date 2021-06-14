import get from '../function/get';
import type { Dictionary, PropertyPath } from '../type';

/**
 * 对象数组,指定对象中的值作为map的key
 * @param array {T[]}
 * @param paths {keyof T} 对象的key,参数参考{@link get}
 * @return 返回新的map，相同的值会覆盖
 * @category Array
 */
function arrayToMap<T extends Dictionary<any>>(array: T[], paths: PropertyPath[]): Dictionary<T> {
  return array.reduce((acc, item) => {
    acc[get(item, paths)!] = { ...item };
    return acc;
  }, {});
}

export default arrayToMap;
