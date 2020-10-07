import { BaseRetryOpts } from './interfaces';
import delay from './delay';

/**
 * promise resolve 没有值的情况重试,每次失败reject都会报错
 * 一定次数内重试获取获取一些异步的值
 * @param fn
 * @param retryOpts
 */
function until<T extends (...args: any[]) => Promise<any>>(fn: T, retryOpts: BaseRetryOpts): T {
  return (async (...args: any[]): Promise<any> => {
    let retries = retryOpts.maxAttempts!;
    while (retries !== undefined ? retries : true) {
      if (retries !== undefined) {
        --retries;
      }
      const result = await fn(...args);
      if (result) {
        return result;
      }
      if (retryOpts.delayMs) {
        await delay(retryOpts.delayMs);
      }
    }
    throw new Error(`Could not complete function within ${retryOpts.maxAttempts} attempts`);
  }) as T;
}

export default until;
