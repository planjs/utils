export type DateInput = Date | number | string;

const InvalidDateError = new Error('Invalid Date');

/**
 * 时间戳，字符串，转换成 Date
 * @param input
 */
function toDate(input: DateInput): Date {
  if (input instanceof Date) {
    return input;
  }

  let _date: Date;
  const _type = typeof input;

  if (_type === 'number') {
    const len = String(input).length;
    // unix time
    if (len === 10) {
      input = +input * 1000;
    } else if (len !== 13) {
      throw InvalidDateError;
    }
    _date = new Date(input);
  } else if (_type === 'string') {
    _date = new Date(String(input).replace(/[^\d\s:]+/g, '/'));
  } else {
    throw InvalidDateError;
  }

  if (isNaN(_date!.getTime())) {
    throw InvalidDateError;
  }

  return _date!;
}

export default toDate;
