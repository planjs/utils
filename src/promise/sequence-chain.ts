import { AnyPromiseFN } from './interfaces';

/**
 * 链式处理，向下传递结果
 * @param handlers
 */
function sequenceChain(handlers: Array<[AnyPromiseFN, AnyPromiseFN]>) {
  return <T>(value?: any): Promise<T> => {
    const chain = handlers.slice();
    let promise = Promise.resolve(value!);
    while (chain.length) {
      const [fulfilled, rejected] = chain.shift()!;
      promise = promise.then(fulfilled, rejected);
    }
    return promise;
  };
}

export default sequenceChain;
