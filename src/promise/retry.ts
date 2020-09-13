import { BaseRetryOpts } from './interfaces';
import { delay } from '.';

export interface RetryOpts extends BaseRetryOpts {
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
 * @param retryOpts
 */
function retry<T extends Function>(fn: T, retryOpts: RetryOpts): T {
  return ((async (...args: any[]): Promise<any> => {
    let lastErr: Error = new Error(
      `Could not complete function within ${retryOpts.maxAttempts} attempts`,
    );
    let retries = retryOpts.maxAttempts!;
    while (retries !== undefined ? retries : true) {
      try {
        if (retries !== undefined) {
          --retries;
        }
        return await fn(...args);
      } catch (err) {
        if (retryOpts.isRetryable && !retryOpts.isRetryable(err)) {
          throw err;
        }
        lastErr = err;
      }
      if (retryOpts.delayMs) {
        await delay(retryOpts.delayMs);
      }
    }
    throw lastErr;
  }) as any) as T;
}

export default retry;
