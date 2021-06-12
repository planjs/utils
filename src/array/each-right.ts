/**
 * 从右边foreach数组
 * @param array
 * @param iteratee
 */
function arrayEachRight<T>(
  array: T[],
  iteratee: (item: T, index: number, array: T[]) => false | void,
) {
  let length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEachRight;
