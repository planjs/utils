/**
 * 获取范围内的数组
 * @param from
 * @param to
 * @param step
 */
function range(from: number, to: number, step: number = 1): number[] {
  return Array.from({ length: Math.floor((to - from) / step) + 1 }, (_, k) => from + k * step);
}

export default range;
