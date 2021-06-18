import type { AnyFn } from '../type';

type MemoizeWithReturnType<T extends AnyFn> = {
  clear(): void;
  cache: Map<string, ReturnType<T>>;
} & T;

/**
 * 缓存函数返回结果
 * @param func
 * @param harsher 默认会 args[0]
 * @desc 替换cache函数`memoizeWith.Cache`默认是Map
 * @example
 * ```ts
 * let count = 0;
 * const counter = memoizeWith(n => {
 *    count++;
 *    return n * 2;
 * })
 * counter(50) // 100
 * counter(50) // 100
 * counter(50) // 100
 * count // 1
 * counter(100) // 200
 * count // 2
 * ```
 */
function memoizeWith<FN extends AnyFn>(
  func: FN,
  harsher?: (...args: Parameters<FN>) => any,
): MemoizeWithReturnType<FN> {
  const memos = (memoized.cache = new (memoizeWith.Cache || Map)() as Map<
    ReturnType<NonNullable<typeof harsher>>,
    ReturnType<FN>
  >);

  function memoized(this: FN, ...args: Parameters<FN>) {
    const key = harsher?.apply(this, args) || args[0];
    const cache = memos[key];

    if (cache) return cache;
    const result = func.apply(this, args);
    memos.set(key, result);
    return result;
  }
  memoized.clear = function () {
    memos.clear();
  };
  return memoized as MemoizeWithReturnType<FN>;
}

memoizeWith.Cache = Map;

export default memoizeWith;
