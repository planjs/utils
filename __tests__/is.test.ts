import { isNode, isBrowser, isIE } from '../src';

describe('is', () => {
  test('is-platform', () => {
    expect(isNode()).toBe(true);
    expect(isBrowser()).toBe(true);
    expect(isIE()).toBe(false);
  });
});
