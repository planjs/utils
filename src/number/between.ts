/**
 * number is in a range
 * @param number
 * @param start
 * @param end
 *
 * @example
 * between(1, 2) // true
 * between(2, 1, 3) // true
 * between(3, 3) // false
 */
function between(number: number, start: number, end: number) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

export default between;
