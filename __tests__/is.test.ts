import { isNode, isBrowser, isIE, isInfinite, isDigit, isIterable } from '../src/is';

describe('is', () => {
  test('is-platform', () => {
    expect(isNode()).toBeTruthy();
    expect(isBrowser()).toBeTruthy();
    expect(isIE()).toBeFalsy();
  });

  test('is-Infinite', () => {
    expect(isInfinite(Infinity)).toBeTruthy();
    expect(isInfinite(-Infinity)).toBeTruthy();
    expect(isInfinite(1)).toBeFalsy();
    expect(isInfinite(0)).toBeFalsy();
    expect(isInfinite('1')).toBeFalsy();
  });

  test('is-Digit', () => {
    expect(isDigit('1')).toBeTruthy();
    expect(isDigit('1.2')).toBeTruthy();
    expect(isDigit('-1.2')).toBeTruthy();
    expect(isDigit(1.2)).toBeTruthy();
    expect(isDigit(-1.2)).toBeTruthy();
    expect(isDigit(Infinity)).toBeFalsy();
    expect(isDigit(-Infinity)).toBeFalsy();
    expect(isDigit('1.x')).toBeFalsy();
  });

  test('isIterable', () => {
    function* makeIterator() {
      yield 1;
      yield 2;
    }
    const it = makeIterator();
    expect(isIterable(it)).toBeTruthy();
  });
});
