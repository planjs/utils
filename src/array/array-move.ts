/**
 * 移动数组中元素位置
 * @param array
 * @param from
 * @param to
 */
function arrayMove<T>(array: T[], from: number, to: number) {
  const startIndex = from < 0 ? array.length + from : from;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = to < 0 ? array.length + to : to;

    const [item] = array.splice(from, 1);
    array.splice(endIndex, 0, item);
  }
}

export default arrayMove;
