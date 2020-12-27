/**
 * 格式化距现在的已过时间
 * @param startTime
 */
export function parsePassTime(startTime: number) {
  const currentTime = Date.parse((new Date() as unknown) as string),
    time = currentTime - startTime,
    day = parseInt(String(time / (1000 * 60 * 60 * 24))),
    hour = parseInt(String(time / (1000 * 60 * 60))),
    min = parseInt(String(time / (1000 * 60))),
    month = parseInt(String(day / 30)),
    year = parseInt(String(month / 12));
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';
  else return '刚刚';
}

export default parsePassTime;
