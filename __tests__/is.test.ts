import { isNode, isBrowser, isIE, isInfinite, isDigit } from '../src/is';

describe('is', () => {
  test('is-platform', () => {
    expect(isNode()).toBe(true);
    expect(isBrowser()).toBe(true);
    expect(isIE()).toBe(false);
  });

  test('is-Infinite', () => {
    expect(isInfinite(Infinity)).toBe(true);
    expect(isInfinite(-Infinity)).toBe(true);
    expect(isInfinite(1)).toBe(false);
    expect(isInfinite(0)).toBe(false);
    expect(isInfinite('1')).toBe(false);
  });

  test('is-Digit', () => {
    expect(isDigit('1')).toBe(true);
    expect(isDigit('1.2')).toBe(true);
    expect(isDigit(1.2)).toBe(true);
    expect(isDigit(Infinity)).toBe(false);
    expect(isDigit('1.x')).toBe(false);
  });
});
