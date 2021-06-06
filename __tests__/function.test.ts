import { get } from '../src/function';

describe('function', () => {
  test('get', () => {
    expect(get({ a: { a: 1 } }, ['a', 'a'])).toBe(1);
  });
});
