import type { AnyFn } from '../type';

type Curry1<T1, R> = {
  (): Curry1<T1, R>;
  (t1: T1): R;
};
type Curry2<T1, T2, R> = {
  (): Curry2<T1, T2, R>;
  (t1: T1): Curry1<T2, R>;
  (t1: T1, t2: T2): R;
};
type Curry3<T1, T2, T3, R> = {
  (): Curry3<T1, T2, T3, R>;
  (t1: T1): Curry2<T2, T3, R>;
  (t1: T1, t2: T2): Curry1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
};
type Curry4<T1, T2, T3, T4, R> = {
  (): Curry4<T1, T2, T3, T4, R>;
  (t1: T1): Curry3<T2, T3, T4, R>;
  (t1: T1, t2: T2): Curry2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): Curry1<T4, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
};
type Curry5<T1, T2, T3, T4, T5, R> = {
  (): Curry5<T1, T2, T3, T4, T5, R>;
  (t1: T1): Curry4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): Curry3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): Curry2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): Curry1<T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
};

function curry<T1, R>(func: (t1: T1) => R, depth?: number): Curry1<T1, R>;
function curry<T1, T2, R>(func: (t1: T1, t2: T2) => R, depth?: number): Curry2<T1, T2, R>;
function curry<T1, T2, T3, R>(
  func: (t1: T1, t2: T2, t3: T3) => R,
  depth?: number,
): Curry3<T1, T2, T3, R>;
function curry<T1, T2, T3, T4, R>(
  func: (t1: T1, t2: T2, t3: T3, t4: T4) => R,
  depth?: number,
): Curry4<T1, T2, T3, T4, R>;
function curry<T1, T2, T3, T4, T5, R>(
  func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R,
  depth?: number,
): Curry5<T1, T2, T3, T4, T5, R>;
function curry(fn: AnyFn, depth: number = fn.length): AnyFn {
  return function (...args) {
    if (args.length && args.length < depth) {
      return curry(fn.bind(null, ...args), depth - args.length);
    } else {
      return fn.call(null, ...args);
    }
  };
}

export default curry;
