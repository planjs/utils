/**
 * 累加数组中的每一项
 * @param array
 */
function arraySum(array: number[]) {
  return array.reduce((pre, cur) => {
    return pre + cur;
  });
}

export default arraySum;
