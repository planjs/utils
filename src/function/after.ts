import type { AnyFn } from '../type';

/**
 * 执行多少次之后，再执行
 * @param n
 * @param func
 * @category Function
 */
function after<FN extends AnyFn>(n: number, func: FN): FN {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  n = n || 0;
  return function (this: FN, ...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  } as FN;
}

export default after;
