import { PromiseFN } from './interfaces';

/**
 * 链式处理，向下传递结果
 * eg：拦截器
 * @param handlers
 */
function sequenceChain(handlers: PromiseFN[]) {
  const chain = handlers.slice();
  let promise = Promise.resolve();
  while (chain.length) {
    const fulfilled = chain.shift();
    const rejected = chain.shift();
    promise = promise.then(fulfilled, rejected);
  }
  return promise;
}

export default sequenceChain;
