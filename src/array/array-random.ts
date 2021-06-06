/**
 * 从数组中随机获取一项
 * @param arr {T[]}
 * @return {T}
 */
function arrayRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default arrayRandom;
