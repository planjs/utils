import toDate, { DateInput } from './to-date';

/**
 * 计算剩余时间
 * @note startTime - endTime 的剩余时间,startTime大于endTime时，均返回0
 * @param startTime
 * @param endTime
 * @category Date
 */
function timeLeft(startTime: DateInput, endTime: DateInput) {
  if (!startTime || !endTime) {
    return;
  }
  const startDate = toDate(startTime),
    endDate = toDate(endTime);
  const t = endDate.getTime() - startDate.getTime();
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return { d, h, m, s };
}

export default timeLeft;
