/**
 * 从数组中随机获取一项
 * @param array {T[]}
 * @return {T}
 */
function arrayRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export default arrayRandom;
