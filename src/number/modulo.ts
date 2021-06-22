/**
 * 取模
 * @param n
 * @param d
 * @category Number
 */
function modulo(n: number, d: number) {
  if (d === 0) {
    return n;
  }
  if (d < 0) {
    return NaN;
  }
  return ((n % d) + d) % d;
}

export default modulo;
