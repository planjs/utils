import { get, prefSetTimeout, prefSetInterval, clearPrefSetInterval } from '../src/function';
import { defer } from '../src/promise';

describe('function', () => {
  test('get', () => {
    expect(get({ a: { a: 1 } }, ['a', 'a'])).toBe(1);
  });

  test('pref-setTimeout', async () => {
    const startTime = Date.now();
    let endTime = startTime;
    const timeout = 200;
    const { promise, resolve } = defer();
    prefSetTimeout(() => {
      endTime = Date.now();
    }, timeout);
    setTimeout(() => resolve(), timeout + 16);
    await promise;
    expect(endTime - startTime).toBeLessThan(timeout + 20);
  });

  test('pref-setInterval', async () => {
    const prefRes: number[] = [];
    const orgRes: number[] = [];
    const interval = 200;
    const max = 5;
    const { promise, resolve } = defer();
    let count = 0;
    function done() {
      if (count === 2) {
        resolve();
      }
    }
    const prefId = prefSetInterval(() => {
      prefRes.push(Date.now());
      if (prefRes.length >= max) {
        clearPrefSetInterval(prefId);
        count++;
        done();
      }
    }, interval);
    const id = setInterval(() => {
      orgRes.push(Date.now());
      if (orgRes.length >= max) {
        clearInterval(id);
        count++;
        done();
      }
    }, interval);
    await promise;
    expect(prefRes.every((v, i) => Math.abs(orgRes[i] - v) < 16 * 2)).toBe(true);
  });
});
