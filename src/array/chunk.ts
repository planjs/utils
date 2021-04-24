/**
 * 将数组分成指定大小的较小数组
 * @param arr
 * @param size default 1
 */
function chunk<T>(arr: Array<T>, size: number = 1): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

export default chunk;
