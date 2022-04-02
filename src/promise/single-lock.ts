/**
 * 获取一个锁
 * @return lock 获得锁
 *         unLock 解锁，promise.resolve
 *         exit 退出，promise.reject
 * @category Promise
 */
function singleLock<T = any>() {
  let locked = false;
  const queue: any[] = [];

  function lock() {
    if (locked) {
      return new Promise<T>((resolve, reject) => queue.push(resolve, reject));
    }
    locked = true;
    return Promise.resolve();
  }

  function unLock<T>(args: T) {
    const resolve = queue.shift();
    queue.shift();
    if (resolve) {
      resolve(args);
    } else {
      locked = false;
    }
  }

  function exit<R = any>(args?: R) {
    queue.shift();
    const reject = queue.shift();
    if (reject) {
      reject(args);
    } else {
      locked = false;
    }
  }

  return {
    lock,
    unLock,
    exit,
  };
}

export default singleLock;
