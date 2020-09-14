interface LikeWXApi {
  success?(res?: any): void;
  fail?(res?: any): void;
}

/**
 * promise化 success fail 参数的api
 * @param func
 */
function promisify<Options extends LikeWXApi, PromisifyResult>(func: (_: Options) => void) {
  return (opt?: Options) =>
    new Promise<PromisifyResult>((resolve, reject) =>
      func({
        ...opt,
        success: resolve,
        fail: reject,
      } as Options),
    );
}

export default promisify;
