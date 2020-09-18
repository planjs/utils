import { timeout, delay } from '../src';

describe('promise/timeout', () => {
  test('resolves appropriate value when function finishes first', async () => {
    const res = await timeout(() => true, 1000, 'Test function did not complete within 1 second')();
    expect(res).toBe(true);
  });

  test('throws errors when delays are too long', async () => {
    try {
      await timeout(async () => delay(50, undefined), 0, 'Test function completed too fast!')();
    } catch (e) {
      expect(e!.message).toBe('Test function completed too fast!');
    }
  });

  test('uses default error message', async () => {
    try {
      await timeout(async () => delay(50, undefined), 0)();
    } catch (e) {
      expect(e!.message).toBe('Could not resolve [<anonymous] within 0 ms');
    }
  });

  test('default error message uses function name', async () => {
    try {
      await timeout(async function delay50() {
        await delay(50, undefined);
      }, 0)();
    } catch (e) {
      expect(e.message).toBe('Could not resolve delay50 within 0 ms');
    }
  });
});
