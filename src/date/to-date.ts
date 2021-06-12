export type DateInput = Date | number | string;

/**
 * 时间戳，字符串，转换成 Date
 * @param input
 * @throws InvalidDateError
 */
function toDate(input: DateInput): Date {
  const InvalidDateError = new Error('Invalid Date');

  if (input instanceof Date) {
    return input;
  }

  let _date: Date;
  const _type = typeof input;

  if (_type === 'number') {
    const len = String(parseInt(input as string)).length;
    // unix time
    if (len === 10) {
      input = +input * 1000;
    } else if (len !== 13) {
      throw InvalidDateError;
    }
    _date = new Date(Math.floor(input as number));
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
