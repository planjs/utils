/**
 * 是否为undefined
 * @param value
 */
function isUndefined(value): value is undefined {
  return value === void 0;
}

/**
 * 是否为undefined字符串
 * @param value
 */
export function isUndefinedStr(value): value is undefined {
  return value === 'undefined';
}

export default isUndefined;
