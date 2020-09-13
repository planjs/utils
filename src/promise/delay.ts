/**
 * 等待一段时间，返回一个promise
 * @default 25
 * @param delayTimeMs
 * @param value
 */
async function delay<T>(delayTimeMs: number, value: T): Promise<T>;
async function delay<T>(delayTimeMs: number): Promise<void>;
async function delay<T>(delayTime: number, value?: T): Promise<void | T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), delayTime));
}

export default delay;
