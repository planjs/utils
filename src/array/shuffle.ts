/**
 * 随机排列数组
 * @param array
 * @return array 返回原数组
 * @category Array
 */
function shuffle<T = any>(array: T[]): T[] {
  const t = array;
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}

export default shuffle;
