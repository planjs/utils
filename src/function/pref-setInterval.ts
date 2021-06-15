import { prefSetTimeout, clearPrefTimeout } from './pref-setTimeout';
import incrementId from './increment-id';

const id = incrementId();

const timerIdMap: Record<number, number> = {};

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
  const _id = id();
  function loop() {
    timerIdMap[_id] = prefSetTimeout(() => {
      handler(...args);
      loop();
    }, interval);
    return _id;
  }
  return loop();
}

/**
 * 取消 prefSetInterval
 * @param handle
 */
export function clearPrefSetInterval(handle: number) {
  if (timerIdMap[handle]) {
    clearPrefTimeout(handle);
    delete timerIdMap[handle];
  }
}
