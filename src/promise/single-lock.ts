/**
 * 获取一个锁
 * @return lock 获得锁
 *         unLock 解锁，promise.resolve
 *         exit 退出，promise.reject
 */
function singleLock<T = any>() {
  let locked = false;
  const queue: any[] = [];

  function lock() {
    if (locked) {
      return new Promise<T>((resolve, reject) => queue.push(resolve, reject));
    } else {
      locked = true;
      return Promise.resolve();
    }
  }

  function unLock(...args: any[]) {
    const resolve = queue.shift();
    queue.shift();
    if (resolve) {
      resolve(...args);
    } else {
      locked = false;
    }
  }

  function exit(...args: any[]) {
    queue.shift();
    const reject = queue.shift();
    if (reject) {
      reject(...args);
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
