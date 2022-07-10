const check = function (it): it is typeof global {
  return it && it.Object === Object && it;
};

/**
 * global
 */
const _global = check(typeof global == 'object' && global);

/**
 * window
 */
const _window = check(typeof window == 'object' && window);

/**
 * globalThis
 */
const _globalThis = check(typeof globalThis == 'object' && globalThis);

/**
 * self
 */
// eslint-disable-next-line no-restricted-globals
const _self = check(typeof self == 'object' && self);

/**
 * 全局对象
 */
const root = _globalThis || _window || _global || _self || Function('return this')();

export default root;
