/**
 * 微信语义化形式展示
 * 1、< 60s, 显示为“刚刚”
 * 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
 * 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
 * 4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
 * 5、>= 1year, 显示具体日期 XXXX年XX月XX日 XX:XX
 * @param time
 */
function parseTimeWX(time) {
  const date = new Date(time);
  const curDate = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 10;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const curYear = curDate.getFullYear();
  const curHour = curDate.getHours();
  let timeStr;

  if (year < curYear) {
    timeStr = year + '年' + month + '月' + day + '日' + hour + ':' + minute;
  } else {
    const pastTime = +curDate - +date;
    const pastH = pastTime / 3600000;

    if (pastH > curHour) {
      timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute + '分';
    } else {
      const pastM = curDate.getMinutes() - minute;
      if (pastM > 1) {
        timeStr = pastM + '分钟前';
      } else {
        timeStr = '刚刚';
      }
    }
  }

  return timeStr;
}

export default parseTimeWX;
