import requestAnimationFrame from '../bom/requestAnimationFrame';
import cancelAnimationFrame from '../bom/cancelAnimationFrame';
import isNative from '../is/is-native';
import incrementId from './increment-id';

const id = incrementId();

const timerIdMap: Record<number, number> = {};

const useRAF = isNative(requestAnimationFrame);

/**
 * 优先使用 requestAnimationFrame 实现 setTimeout
 * 如果没有 requestAnimationFrame 则使用 native setTimeout
 * @note 当窗口未激活的时候会暂停
 * @param handler
 * @param timeout
 * @param args
 * @category Function
 */
export function prefSetTimeout(handler: Function, timeout?: number, ...args: any[]): number {
  if (!useRAF) {
    return setTimeout(handler, timeout, ...args);
  }
  const _id = id();
  const interval = timeout || 0;
  const startTime = Date.now();
  let endTime = startTime;
  const loop = () => {
    timerIdMap[_id] = requestAnimationFrame(loop);
    endTime = Date.now();
    if (endTime - startTime >= interval) {
      clearPrefTimeout(_id);
      handler(...args);
    }
  };
  timerIdMap[_id] = requestAnimationFrame(loop);
  return _id;
}

/**
 * 取消 prefSetTimeout
 * @param handle
 * @category Function
 */
export function clearPrefTimeout(handle: number) {
  if (!useRAF) {
    return clearTimeout(handle);
  }
  if (timerIdMap[handle]) {
    cancelAnimationFrame(timerIdMap[handle]);
    delete timerIdMap[handle];
  }
}
