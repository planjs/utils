/**
 * 成功就报错，取反的情况
 * @param promise
 * @param message
 * @category Promise
 */
async function invert(promise: Promise<any>, message?: string): Promise<any> {
  message = message || 'Expected promise to reject';
  return promise.then(
    () => {
      throw new Error(message);
    },
    (err) => err,
  );
}

export default invert;
