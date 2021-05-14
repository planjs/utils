/**
 * 随机排列数组
 * @param a {array} 需要打乱顺序的数组
 */
function shuffle<T = any>(a: T[]): T[] {
  const t = a.slice();
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}

export default shuffle;
