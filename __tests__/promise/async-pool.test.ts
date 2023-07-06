import { asyncPool, delay } from '../../src/promise';

describe('promise/asyncPool', () => {
  test('should be executed one by one', async function () {
    const pool = asyncPool({ maxConcurrency: 1 });
    const start = Date.now();
    pool.executor(() => delay(100));
    pool.executor(() => delay(100));
    await pool.executor(() => delay(100));
    expect(Date.now() - start).toBeGreaterThanOrEqual(300);
  });

  test('should be executed concurrently', async function () {
    const pool = asyncPool({ maxConcurrency: 3 });
    const start = Date.now();
    pool.executor(() => delay(100));
    pool.executor(() => delay(100));
    await pool.executor(() => delay(100));
    // If the timer is inaccurate, add 10 to the safety range
    expect(Date.now() - start).toBeLessThanOrEqual(110);
  });
});
