/**
 * 是否为 Infinity -Infinity
 * @param value
 * @category Is
 */
function isInfinite(value): value is typeof Infinity {
  return value === value / 0;
}

export default isInfinite;
