import type { AnyFn } from '../type';

function uncurry<T>(fn: AnyFn): (...a: any[]) => T {
  return function (...args) {
    return args.reduce((fn, arg) => fn(arg), fn);
  };
}

export default uncurry;
