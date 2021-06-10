import requestAnimationFrame from '../bom/requestAnimationFrame';

/**
 * 等待一段时间，返回一个promise
 * @default 25
 * @param delayTimeMs
 * @param value
 */
async function delay<T>(delayTimeMs: number, value: T): Promise<T>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function delay<T>(delayTimeMs: number): Promise<void>;
async function delay<T>(delayTime: number, value?: T): Promise<void | T> {
  if (delayTime <= 17) {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  return new Promise((resolve) => setTimeout(() => resolve(value), delayTime));
}

export default delay;
