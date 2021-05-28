/**
 * 每三个数字中添加一个逗号
 * @param number
 * @example
 * 111111 => 111,111
 */
function numberToStringWithComma(number: number) {
  // convert number to string
  const str = String(number);

  let s = '';
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    s = str[i] + s;
    count++;
    // add a comma to every three numbers
    if (count % 3 === 0 && i !== 0) {
      s = ',' + s;
    }
  }
  return s;
}

export default numberToStringWithComma;
