import { get } from '../src';

describe('function', () => {
  test('get', () => {
    expect(get({ a: { a: 1 } }, ['a', 'a'])).toBe(1);
  });
});
