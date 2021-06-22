/**
 * 设置时间限制超时返回报错
 * @param fn
 * @param expirationTime
 * @param errorMessage
 * @category Promise
 */
function timeout<T extends Function>(fn: T, expirationTime: number, errorMessage?: string): T {
  errorMessage =
    errorMessage || `Could not resolve ${fn.name || '[<anonymous]'} within ${expirationTime} ms`;
  return async function race(this: any) {
    return Promise.race([
      new Promise((_: Function, reject: Function): void => {
        setTimeout((): void => reject(new Error(errorMessage)), expirationTime);
      }) as Promise<never>,
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments),
    ]);
  } as any as T;
}

export default timeout;
