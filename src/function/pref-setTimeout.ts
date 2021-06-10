import requestAnimationFrame from '../bom/requestAnimationFrame';
import cancelAnimationFrame from '../bom/cancelAnimationFrame';
import incrementId from './increment-id';

const id = incrementId();

const timerIdMap: Record<number, number> = {};

/**
 * 优先使用 requestAnimationFrame 实现 setTimeout
 * @note 当窗口未激活的时候会暂停
 * @param handler
 * @param timeout
 * @param args
 */
export function prefSetTimeout(handler: Function, timeout?: number, ...args: any[]): number {
  const _id = id();
  const interval = timeout || 0;
  const startTime = Date.now();
  let endTime = startTime;
  const loop = () => {
    timerIdMap[_id] = requestAnimationFrame(loop);
    endTime = Date.now();
    if (endTime - startTime >= interval) {
      clearPrefTimeout(timerIdMap[_id]);
      handler(...args);
    }
  };
  timerIdMap[_id] = requestAnimationFrame(loop);
  return _id;
}

/**
 * 取消 prefSetTimeout
 * @param handle
 */
export function clearPrefTimeout(handle: number) {
  if (timerIdMap[handle]) {
    cancelAnimationFrame(timerIdMap[handle]);
    delete timerIdMap[handle];
  }
}
