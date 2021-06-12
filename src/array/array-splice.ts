import arrayEachRight from './each-right';

/**
 * array splice 多个index
 * @param array
 * @param indexes
 */
function arraySplice<T>(array: T[], ...indexes: number[]) {
  arrayEachRight(array, (_, index) => {
    if (indexes.includes(index)) {
      array.splice(index, 1);
    }
  });
}

export default arraySplice;
