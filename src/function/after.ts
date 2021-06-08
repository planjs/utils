import { AnyFn } from '../type';

/**
 * 执行多少次之后，再执行
 * @param n
 * @param func
 */
function after<FN extends AnyFn>(n: number, func: FN): FN {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  n = n || 0;
  return function (...args) {
    if (--n < 1) {
      // @ts-ignore
      return func.apply(this, args);
    }
  } as FN;
}

export default after;
