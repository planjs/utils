/**
 * 返回一个promise，外部可以控制promise状态
 * @return {promise,resolve,reject}
 */
function defer<T>(): {
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
} {
  let resolve, reject;

  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return {
    promise,
    reject,
    resolve,
  };
}

export default defer;
