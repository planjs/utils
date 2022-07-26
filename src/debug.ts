import isFunction from './is/is-Function';

/**
 * 如果值有问题则报错
 * @param condition
 * @param msg
 */
export function ensure(condition: boolean, msg: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

/**
 * 如果fn不是一个函数就报typeError
 * @param fn
 * @return fn 如果fn是函数，则返回函数，否则报错
 */
export function ensureCallable<T extends Function = any>(fn: any): T {
  if (!isFunction(fn)) throw new TypeError(fn + ' is not a function');
  return fn;
}

/**
 * 如果值有问题则warn
 * @param condition
 * @param msg
 */
export function warn(condition: boolean, msg: string) {
  if (process.env.NODE_ENV !== 'production') {
    if (condition) {
      console.warn(msg);
    }
  }
}
