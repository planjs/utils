import { prefSetTimeout, clearPrefTimeout } from './pref-setTimeout';

/**
 * 优先使用 requestAnimationFrame 实现 setInterval
 * 如果没有 requestAnimationFrame 则用 setTimeout 实现 setInterval
 * @note 当窗口未激活的时候会暂停
 * @param handler
 * @param ms
 * @param args
 */
export function prefSetInterval(handler: Function, ms?: number, ...args: any[]): number {
  const interval = ms || 0;
  function loop() {
    return prefSetTimeout(() => {
      handler(...args);
      loop();
    }, interval);
  }
  return loop();
}

/**
 * 取消 prefSetInterval
 * @param handle
 */
export function clearPrefSetInterval(handle: number) {
  clearPrefTimeout(handle);
}
