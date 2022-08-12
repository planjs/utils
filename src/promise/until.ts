import type { BaseRetryOption } from './type';
import delay from './delay';
import isFunction from '../is/is-Function';

/**
 * promise resolve 没有值的情况重试,每次失败reject都会报错
 * 一定次数内重试获取获取一些异步的值
 * @param fn
 * @param retryOption
 * @category Promise
 */
function until<T extends (...args: any[]) => Promise<any>>(fn: T, retryOption: BaseRetryOption): T {
  return (async (...args: any[]): Promise<any> => {
    let retries = retryOption.maxAttempts!;
    let attempts = 0;
    while (retries !== undefined ? retries : true) {
      if (retries !== undefined) {
        --retries;
      }
      ++attempts;
      const result = await fn(...args);
      if (result) {
        return result;
      }
      if (retryOption.delayMs) {
        const delayMs = isFunction(retryOption.delayMs)
          ? retryOption.delayMs(attempts) || 0
          : retryOption.delayMs;
        await delay(delayMs);
      }
    }
    throw new Error(`Could not complete function within ${retryOption.maxAttempts} attempts`);
  }) as T;
}

export default until;
