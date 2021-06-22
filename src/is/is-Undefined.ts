/**
 * 是否为undefined
 * @param value
 * @category Is
 */
function isUndefined(value): value is undefined {
  return value === void 0;
}

/**
 * 是否为undefined字符串
 * @param value
 * @category Is
 */
export function isUndefinedStr(value): value is undefined {
  return value === 'undefined';
}

export default isUndefined;
