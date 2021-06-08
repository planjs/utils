import { AnyFn } from '../type';

/**
 * 只执行最开始的几次，超过次数之后返回最后一次执行的结果
 * @param n
 * @param func
 */
function before<FN extends AnyFn>(n: number, func: FN): FN {
  let result;
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function (...args) {
    if (--n > 0) {
      // @ts-ignore
      result = func.apply(this, args);
    }
    return result;
  } as FN;
}

export default before;
