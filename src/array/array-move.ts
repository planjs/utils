/**
 * 移动数组中元素位置
 * @param array
 * @param from 原始位置,如果超过数组长度，则不出处理
 * @param to 目标位置
 * @return array 返回原数组
 * @category Array
 */
function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const startIndex = from < 0 ? array.length + from : from;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = to < 0 ? array.length + to : to;

    const [item] = array.splice(from, 1);
    array.splice(endIndex, 0, item);
  }

  return array;
}

export default arrayMove;
