import { getRandomString } from '../src';

describe('getRandomString', () => {
  test('length', () => {
    const str = getRandomString(10);
    console.log(str);
    expect(str.length).toBe(10);
  });
});
