import isFunction from '../is/is-Function';
import { ensureCallable } from '../debug';

import type { AnyFn } from '../type';

/**
 * 延迟执行
 * event loop
 * @category Function
 */
function nextTick(callback: Function, ...args: any[]) {
  // nodejs
  if (isFunction(typeof process === 'object' && process && process.nextTick)) {
    return process.nextTick(ensureCallable<AnyFn>(callback), ...args);
  }

  if (typeof queueMicrotask == 'function') {
    return queueMicrotask(ensureCallable<AnyFn>(callback));
  }

  if (typeof setImmediate === 'function') {
    return setImmediate(ensureCallable<AnyFn>(callback), ...args);
  }

  return setTimeout(ensureCallable<AnyFn>(callback), 0, ...args);
}

export default nextTick;
