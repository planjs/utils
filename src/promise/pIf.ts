/**
 * promise 链式条件判断
 * @param condition true 调用 doIf 否则 doElse
 * @param doIf 如果 condition 为 true 执行
 * @param doElse 如果 condition 为 false 执行
 */
function pIf<ValueType, DoIfReturnType, DoElseReturnType = ValueType>(
  condition: boolean | ((value: ValueType) => boolean | PromiseLike<boolean>),
  doIf: (value: ValueType) => DoIfReturnType | PromiseLike<DoIfReturnType>,
  doElse?: (value: ValueType) => DoElseReturnType | PromiseLike<DoElseReturnType>,
): (value: ValueType) => Promise<DoIfReturnType | DoElseReturnType> {
  return async function (value: any) {
    const chooseFn = (bool: boolean | void) =>
      bool === true ? doIf(value) : doElse ? doElse(value) : value;

    if (typeof condition === 'function') {
      const conditionResult = await condition(value);
      return chooseFn(conditionResult);
    }

    return chooseFn(condition);
  };
}

export default pIf;
