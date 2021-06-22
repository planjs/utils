import type { AnyFn } from '../type';

/**
 * 反柯里化
 * @param fn
 * @category Function
 */
function uncurry<T extends (...args: any[]) => any>(fn: AnyFn): T {
  return function (...args) {
    return args.reduce((fn, arg) => fn(arg), fn);
  } as T;
}

export default uncurry;
