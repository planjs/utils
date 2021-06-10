import requestAnimationFrame from '../bom/requestAnimationFrame';
import cancelAnimationFrame from '../bom/cancelAnimationFrame';
import incrementId from './increment-id';

const id = incrementId();

const timerIdMap: Record<number, number> = {};

/**
 * 优先使用 requestAnimationFrame 实现 setInterval
 * @note 当窗口未激活的时候会暂停
 * @param handler
 * @param ms
 * @param args
 */
export function prefSetInterval(handler: Function, ms?: number, ...args: any[]): number {
  const _id = id();
  const interval = ms || 0;
  let startTime = Date.now();
  let endTime = startTime;
  const loop = () => {
    timerIdMap[_id] = requestAnimationFrame(loop);
    endTime = Date.now();
    if (endTime - startTime >= interval) {
      handler(...args);
      startTime = endTime;
    }
  };
  timerIdMap[_id] = requestAnimationFrame(loop);
  return _id;
}

/**
 * 取消 prefSetInterval
 * @param handle
 */
export function clearPrefSetInterval(handle: number) {
  if (timerIdMap[handle]) {
    cancelAnimationFrame(timerIdMap[handle]);
    delete timerIdMap[handle];
  }
}
