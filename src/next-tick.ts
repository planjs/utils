import isFunction from './is/is-Function';

const ensureCallable = function (fn) {
  if (isFunction(fn)) throw new TypeError(fn + ' is not a function');
  return fn;
};

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
      setImmediate(ensureCallable(cb), ...args);
    };
  }

  return function (cb, ...args) {
    setTimeout(ensureCallable(cb), 0, ...args);
  };
}

/**
 * 延迟执行
 * event loop
 */
const nextTick = _nextTick();

export default nextTick;
