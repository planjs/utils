import type { PromiseFN } from './interfaces';

export interface AsyncPoolOption {
  /**
   * 最大同时执行异步任务
   */
  maxConcurrency: number;
}

export interface AsyncPoolExecutorOpts {
  /**
   * 下一次优先执行
   * @default false
   */
  isPriority?: boolean;
}

/**
 * 异步池，放入需要执行的异步任务，总并行执行任务不超过设置的最大并发数量
 * @param option
 */
function asyncPool(option: AsyncPoolOption) {
  const queue: PromiseFN[] = [];
  let currentAsyncOperations = 0;

  function next() {
    if (currentAsyncOperations < option.maxConcurrency) {
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

  /**
   * 添加一个任务，返回当前任务的执行结果
   * @param fn
   * @param opts
   */
  function executor<T>(fn: PromiseFN<T>, opts?: AsyncPoolExecutorOpts) {
    return new Promise<T>((resolve, reject) => {
      const _fn = () => fn().then(resolve, reject);
      if (opts?.isPriority) {
        queue.unshift(_fn);
      } else {
        queue.push(_fn);
      }
      next();
    });
  }

  /**
   * 清理掉当前所有任务
   */
  function clear() {
    queue.length = 0;
  }

  /**
   * 当前任务长度
   * @return queue len
   */
  function length() {
    return queue.length;
  }

  return { executor, clear, length };
}

export default asyncPool;
