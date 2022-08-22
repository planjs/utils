import isArray from '../is/is-Array';
import isDef from '../is/is-def';

/**
 * 转换成数组
 * @param val
 * @category Array
 */
function arrayify(val) {
  return !isDef(val) ? (isArray(val) ? val : [val]) : [];
}

export default arrayify;
