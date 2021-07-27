import { getRandomString } from '../src';

describe('random', () => {
  test('getRandomString', () => {
    const str = getRandomString(10);
    expect(str.length).toBe(10);
    expect([...new Set(str.split(''))].length).toBeLessThanOrEqual(10);
  });
});
