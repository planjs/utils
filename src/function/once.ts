import type { AnyFn } from '../type';
import before from './before';

/**
 * 只执行一次，之后调用返回第一次的结果
 * @param func
 */
function once<FN extends AnyFn>(func: FN) {
  return before<FN>(2, func);
}

export default once;
