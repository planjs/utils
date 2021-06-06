/**
 * 移动数组中元素位置
 * @param arr
 * @param from
 * @param to
 */
function arrayMove<T>(arr: T[], from: number, to: number) {
  const startIndex = from < 0 ? arr.length + from : from;

  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = to < 0 ? arr.length + to : to;

    const [item] = arr.splice(from, 1);
    arr.splice(endIndex, 0, item);
  }
}

export default arrayMove;
