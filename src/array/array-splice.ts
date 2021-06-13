import arrayEachRight from './each-right';

/**
 * 一次删除数组中多个元素
 * @param array
 * @param indexes 下标数组
 * @category Array
 */
function arraySplice<T>(array: T[], ...indexes: number[]) {
  arrayEachRight(array, (_, index) => {
    if (indexes.includes(index)) {
      array.splice(index, 1);
    }
  });
}

export default arraySplice;
