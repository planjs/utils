/**
 * 是否是定义过的数据 值不是 undefined null
 * @param v
 * @category Is
 */

function isDef<T extends string | number | boolean | object | bigint | Array<any> | symbol>(
  v,
): v is T {
  return v !== undefined && v !== null;
}

export default isDef;
