import arrayEachRight from './each-right';

/**
 * 一次删除数组中多个元素
 * @param array
 * @param indexes 下标数组
 * @return array 被删除的元素
 * @category Array
 */
function arraySplice<T>(array: T[], indexes: number[]) {
  const spliceRes: T[] = [];
  arrayEachRight(array, (_, index) => {
    if (indexes.includes(index)) {
      spliceRes.unshift(...array.splice(index, 1));
    }
  });
  return spliceRes;
}

export default arraySplice;
