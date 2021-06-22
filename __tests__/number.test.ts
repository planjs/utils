import { decimal } from '../src/number';

describe('number', () => {
  test('decimal', () => {
    expect(decimal.add(1, 2, 3).valueOf()).toBe('6');
  });
});
