import type { AnyFn } from '../type';

/**
 * 通过try catch包裹函数，如果失败会调用catcher返回相同结果，可以省略try catch
 * @param tryer
 * @param catcher 返回跟tryer相同结果
 * @example
 * ```ts
 * const result = tryCatch(() => throw new Error('error'), () => 1)
 * result() // 1
 * ```
 */
function tryCatch<FN extends AnyFn>(
  tryer: FN,
  catcher: (...args: [any, ...Parameters<FN>]) => ReturnType<FN>,
) {
  return function (this: FN, ...args: Parameters<FN>) {
    try {
      return tryer.apply(this, args);
    } catch (e) {
      return catcher.apply(this, [e, ...args]);
    }
  } as FN;
}

export default tryCatch;
