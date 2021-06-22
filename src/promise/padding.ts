import delay from './delay';

/**
 * 延迟promise返回结果
 * @param promise
 * @param paddingMs
 * @category Promise
 */
function padding<T>(promise: T, paddingMs: number) {
  const start = Date.now();
  return Promise.all([promise, delay(paddingMs)])
    .then(([result]) => result)
    .catch((error) => {
      const now = Date.now();
      const elapsed = now - start;
      if (elapsed > paddingMs) {
        throw error;
      }
      return delay(paddingMs - elapsed).then(() => Promise.reject(error));
    });
}

export default padding;
