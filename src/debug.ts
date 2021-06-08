/**
 * 如果值有问题则报错
 * @param condition
 * @param msg
 */
export function ensure(condition: boolean, msg: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

/**
 * 如果值有问题则warn
 * @param condition
 * @param msg
 */
export function warn(condition: boolean, msg: string) {
  if (process.env.NODE_ENV !== 'production') {
    if (condition) {
      console.warn(msg);
    }
  }
}
