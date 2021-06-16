import type { ThenReturn } from '../type';
import type { AnyPromiseFN } from './interfaces';

export type MemoizeReturnType<T extends AnyPromiseFN> = {
  reset(...args: Parameters<T>): void;
  clear(): void;
} & T;

/**
 * 缓存promise结果，支持超时时间
 * @param fn 被代理的异步函数
 * @param harsher 返回标示本次运行结果的key
 * @param timeoutMs
 */
function memoize<FnType extends AnyPromiseFN>(
  fn: FnType,
  harsher: (...args: Parameters<FnType>) => any = (...args) => args[0],
  timeoutMs?: number,
): MemoizeReturnType<FnType> {
  const memos: Map<
    ReturnType<typeof harsher>,
    { value: ThenReturn<FnType>; expiration: number }
  > = new Map();
  const queues: Map<ReturnType<typeof harsher>, Promise<ThenReturn<FnType>>> = new Map();

  const returnFn = (async (...args: Parameters<FnType>): Promise<ThenReturn<FnType>> => {
    const key = harsher(...args);
    if (memos.has(key)) {
      if (!timeoutMs || Date.now() < memos.get(key)!.expiration) {
        return memos.get(key)!.value;
      }
    }

    if (queues.has(key)) {
      return await queues.get(key)!;
    }

    const promise = fn(...args);
    queues.set(key, promise);

    try {
      const ret = await queues.get(key)!;
      memos.set(key, { value: ret, expiration: Date.now() + (timeoutMs || 0) });
      return ret;
    } finally {
      queues.delete(key);
    }
  }) as MemoizeReturnType<FnType>;

  const reset = (...args: Parameters<FnType>): void => {
    const key = harsher(...args);
    if (memos.has(key)) {
      memos.delete(key);
    }
  };

  const clear = (): void => {
    memos.clear();
  };

  returnFn.reset = reset;
  returnFn.clear = clear;
  return returnFn!;
}

export default memoize;
