type Fn<V, R> = (x: V) => R;
type Q<T, V> = (arg: T) => V;

function compose<T, V0>(fn1: Q<T, V0>): Q<T, V0>;
function compose<T, V0, V1>(fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V1>;
function compose<T, V0, V1, V2>(fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V2>;
function compose<T, V0, V1, V2, V3>(
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V3>;
function compose<T, V0, V1, V2, V3, V4>(
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V4>;
function compose<T, V0, V1, V2, V3, V4, V5>(
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V5>;
function compose<T, V0, V1, V2, V3, V4, V5, V6>(
  fn6: Fn<V5, V6>,
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V6>;
function compose<T, V0, V1, V2, V3, V4, V5, V6, V7>(
  fn7: Fn<V6, V7>,
  fn6: Fn<V5, V6>,
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V7>;
function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8>(
  fn8: Fn<V7, V8>,
  fn7: Fn<V6, V7>,
  fn6: Fn<V5, V6>,
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V8>;
function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9>(
  fn9: Fn<V8, V9>,
  fn8: Fn<V7, V8>,
  fn7: Fn<V6, V7>,
  fn6: Fn<V5, V6>,
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V9>;
function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10>(
  fn10: Fn<V9, V10>,
  fn9: Fn<V8, V9>,
  fn8: Fn<V7, V8>,
  fn7: Fn<V6, V7>,
  fn6: Fn<V5, V6>,
  fn5: Fn<V4, V5>,
  fn4: Fn<V3, V4>,
  fn3: Fn<V2, V3>,
  fn2: Fn<V1, V2>,
  fn1: Fn<V0, V1>,
  fn0: Q<T, V0>,
): Q<T, V10>;
function compose(...args) {
  return (input) => args.reduceRight((val, fn) => fn(val), input);
}

export default compose;
