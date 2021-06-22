/**
 * 判断是 undefined 或者是 null
 * @param value
 * @category Is
 */
function isNil(value): value is null | undefined {
  return value === null || value === undefined;
}

export default isNil;
