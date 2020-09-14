/**
 * 是否为promise
 * @param obj
 */
function isPromise<T, S>(obj: PromiseLike<T> | S): obj is PromiseLike<T> {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof (obj as PromiseLike<T>).then === 'function'
  );
}

export default isPromise;
