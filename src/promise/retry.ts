import type { BaseRetryOption } from './type';
import delay from './delay';
import isFunction from '../is/is-Function';

export interface RetryOption extends BaseRetryOption {
  /**
   * 如果有些错误符合预期，可以跳过
   * @param err
   */
  isRetryable?: (err: Error) => boolean;
}

/**
 * promise重试
 * 如果没有重试次数则一直重试
 * @param fn 重试函数，需要返回promise
 * @param retryOption
 * @category Promise
 */
function retry<T extends Function>(fn: T, retryOption: RetryOption): T {
  return (async (...args: any[]): Promise<any> => {
    let lastErr: Error = new Error(
      `Could not complete function within ${retryOption.maxAttempts} attempts`,
    );
    let retries = retryOption.maxAttempts!;
    let attempts = 0;
    while (retries !== undefined ? retries : true) {
      try {
        if (retries !== undefined) {
          --retries;
        }
        ++attempts;
        return await fn(...args);
      } catch (err) {
        if (retryOption.isRetryable && !retryOption.isRetryable(err)) {
          throw err;
        }
        lastErr = err;
      }
      if (retryOption.delayMs) {
        const delayMs = isFunction(retryOption.delayMs)
          ? retryOption.delayMs(attempts) || 0
          : retryOption.delayMs;
        await delay(delayMs);
      }
    }
    throw lastErr;
  }) as unknown as T;
}

export default retry;
