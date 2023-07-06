import { memoize, delay } from '../../src/promise';

describe('promise/memoize', () => {
  test('cache 1000ms', async () => {
    let i = 1;
    const fn = memoize(
      () => Promise.resolve(++i),
      () => 1,
      1000,
    );
    for (let i = 0; i < 100; i++) {
      expect(await fn()).toBe(2);
    }

    await delay(1000);
    expect(await fn()).toBe(3);
  });
});
