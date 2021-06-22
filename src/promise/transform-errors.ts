/**
 * 定义promise错误处理函数
 * 一些符合预期的错误，不需要报错，可以加一层转换下
 * @param fn
 * @param errorHandler
 * @category Promise
 */
function transformErrors<T extends Function>(fn: T, errorHandler: Function): T {
  return (async (...args: any[]): Promise<any> => {
    try {
      return await fn(...args);
    } catch (err) {
      return errorHandler(err);
    }
  }) as unknown as T;
}

export default transformErrors;
