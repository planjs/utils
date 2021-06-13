/**
 * 累加数组中所有数字
 * @param array
 * @category Array
 */
function arraySum(array: number[]): number {
  return array.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

export default arraySum;
