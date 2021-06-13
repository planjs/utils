import { toDate } from '../src/date';

describe('date', () => {
  test('to-date', () => {
    expect(() => toDate(121)).toThrowError(Error);
    expect(() => toDate(Infinity)).toThrowError(Error);

    const now = Date.now();
    expect(toDate(now / 1000)).toStrictEqual(new Date(now));
    // expect(toDate(now)).toStrictEqual(new Date(now));
  });
});
