import arraySum from './array-sum';

/**
 * 数组中数据平均值
 * @param array
 */
function arrayAverage(array: number[]) {
  return arraySum(array) / array.length;
}

export default arrayAverage;
