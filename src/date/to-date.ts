import isDigit from '../is/is-digit';
import isDate from '../is/is-Date';
import isString from '../is/is-String';
import between from '../number/between';
import throwError from '../throw-error';

export type DateInput = Date | number | string;

const invalidMsg = 'Invalid Date';

/**
 * 时间戳，字符串，转换成 Date
 * @param input
 * @throws Invalid Date
 * @category Date
 */
function toDate(input: DateInput): Date {
  if (isDate(input)) return input;

  let date: Date | undefined;

  if (isDigit(input)) {
    const len = String(Math.trunc(input)).length;
    if (!between(len, 10, 14)) {
      throwError(invalidMsg);
    }
    input = input * (len === 10 ? 1000 : 1);
    date = new Date(Math.floor(input));
  } else if (isString(input)) {
    date = new Date((input as string).replace(/[^\d\s:]+/g, '/'));
  }

  // Invalid Date
  if (!date || isNaN(date.getTime())) {
    throwError(invalidMsg);
  }

  return date!;
}

export default toDate;
