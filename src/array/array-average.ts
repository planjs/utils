import arraySum from './array-sum';

/**
 * 计算数组中所有数字平均值
 * @param array
 * @category Array
 */
function arrayAverage(array: number[]): number {
  return arraySum(array) / array.length;
}

export default arrayAverage;
