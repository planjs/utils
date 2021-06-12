import { get, after, prefSetTimeout, prefSetInterval, clearPrefSetInterval } from '../src/function';
import { defer } from '../src/promise';

describe('function', () => {
  test('get', () => {
    expect(get({ a: { a: 1 } }, ['a', 'a'])).toBe(1);
  });

  test('pref-setTimeout', async () => {
    const startTime = Date.now();
    let endTime = startTime;
    let orgEndTime = startTime;
    const timeout = 200;
    const def = defer();
    const done = after(2, def.resolve);
    prefSetTimeout(() => {
      endTime = Date.now();
      done();
    }, timeout);
    setTimeout(() => {
      orgEndTime = Date.now();
      done();
    }, timeout);
    await def.promise;
    expect(orgEndTime - endTime).toBeLessThan(16);
  });

  test('pref-setInterval', async () => {
    const prefRes: number[] = [];
    const orgRes: number[] = [];
    const interval = 200;
    const max = 5;
    const def = defer();
    const done = after(2, def.resolve);
    const prefId = prefSetInterval(() => {
      prefRes.push(Date.now());
      if (prefRes.length >= max) {
        clearPrefSetInterval(prefId);
        done();
      }
    }, interval);
    const id = setInterval(() => {
      orgRes.push(Date.now());
      if (orgRes.length >= max) {
        clearInterval(id);
        done();
      }
    }, interval);
    await def.promise;
    expect(prefRes.every((v, i) => Math.abs(orgRes[i] - v) < 16 * 2)).toBe(true);
  });
});
