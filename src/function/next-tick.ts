import isFunction from '../is/is-Function';
import { ensureCallable } from '../debug';

import type { AnyFn } from '../type';

function _nextTick(): (callback: Function, ...args: any[]) => void {
  // nodejs
  if (typeof process === 'object' && process && isFunction(process.nextTick)) {
    return process.nextTick;
  }

  if (isFunction(queueMicrotask)) {
    return function (cb) {
      queueMicrotask(ensureCallable(cb));
    };
  }

  if (isFunction(setImmediate)) {
    return function (cb, ...args) {
      setImmediate(ensureCallable<AnyFn>(cb), ...args);
    };
  }

  return function (cb, ...args) {
    setTimeout(ensureCallable(cb), 0, ...args);
  };
}

/**
 * 延迟执行
 * event loop
 * @category Function
 */
const nextTick = _nextTick();

export default nextTick;
