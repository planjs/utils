/**
 * 是否是定义过的数据 值不是 undefined null
 * @param v
 */
function isDef(v) {
  return v !== undefined && v !== null;
}

export default isDef;
