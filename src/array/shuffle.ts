/**
 * 随机排列数组
 * @param a {array} 需要打乱顺序的数组
 */
function shuffle<T = any>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default shuffle;
