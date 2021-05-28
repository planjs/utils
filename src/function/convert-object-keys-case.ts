import { Dictionary } from '../type';

/**
 * 转换对象中的key为大小写
 * @param obj
 * @param action {toLowerCase|toLowerCase} default toLowerCase
 * @return object
 */
function convertObjectKeysCase<T>(
  obj: Dictionary<T>,
  action: 'toLowerCase' | 'toUpperCase' = 'toLowerCase',
): Dictionary<T> {
  return Object.keys(obj).reduce(function (accum, key) {
    accum[key[action]()] = obj[key];
    return accum;
  }, {});
}

export default convertObjectKeysCase;
