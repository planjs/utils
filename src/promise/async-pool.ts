import { PromiseFN } from './interfaces';

export interface AsyncPoolOpts {
  /**
   * 最大同时执行异步任务
   */
  maxConcurrency: number;
}

/**
 * 异步池，放入需要执行的异步任务，总并行执行任务不超过设置的最大并发数量
 * @param options
 */
function asyncPool(options: AsyncPoolOpts) {
  const queue: PromiseFN[] = [];
  let currentAsyncOperations = 0;

  function next() {
    if (currentAsyncOperations < options.maxConcurrency) {
      const pop = queue.pop();
      if (pop) {
        currentAsyncOperations++;
        pop().finally(() => {
          currentAsyncOperations--;
          next();
        });
      }
    }
  }

  function executor<T>(fn: PromiseFN<T>) {
    return new Promise<T>((resolve, reject) => {
      queue.push(() => fn().then(resolve, reject));
      next();
    });
  }

  function clear() {
    queue.length = 0;
  }

  return { executor, clear };
}

export default asyncPool;
