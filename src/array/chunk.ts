/**
 * 将数组分成指定大小的较小数组
 * @param array
 * @param size default 1
 */
function chunk<T>(array: Array<T>, size: number = 1): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  );
}

export default chunk;
