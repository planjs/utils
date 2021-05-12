/**
 * 合并返回promise的结果和错误
 * @param promise
 * @returns Error and result array
 */
async function pTry<ValueType, ErrorType = any>(
  promise: Promise<ValueType>,
): Promise<[ErrorType, ValueType]> {
  try {
    const result = await promise;
    // @ts-ignore
    return [null, result];
  } catch (error) {
    // @ts-ignore
    return [error, null];
  }
}

export default pTry;
