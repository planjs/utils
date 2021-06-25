import type { Dictionary } from '../type';

/**
 * 创建一个字典
 * @return {object} 没有原型链的对象
 * @category Object
 */
function createDict<T>(): Dictionary<T> {
  return Object.create(null);
}

export default createDict;
