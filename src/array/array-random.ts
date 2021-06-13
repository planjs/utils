/**
 * 随机返回数据中任意一项
 * @param array {T[]}
 * @return {T}
 * @category Array
 */
function arrayRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export default arrayRandom;
