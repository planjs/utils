const check = function (it): it is typeof global {
  return typeof it == 'object' && it.Object === Object;
};

/**
 * global
 */
const _global = check(global) && global;

/**
 * window
 */
const _window = check(window) && window;

/**
 * globalThis
 */
const _globalThis = check(globalThis) && globalThis;

/**
 * self
 */
// eslint-disable-next-line no-restricted-globals
const _self = check(self) && self;

/**
 * func this
 */
const _fnThis =
  (function () {
    // @ts-ignore
    return this;
  })() || Function('return this')();

/**
 * 全局对象
 */
const root = _globalThis || _window || _global || _self || _fnThis;

export default root;
