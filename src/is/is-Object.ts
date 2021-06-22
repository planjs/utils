import isWindow from './is-Window';

/**
 * 定义一个参数是否是object类型的，不等同于javascript中的 typeof
 * null 不是对象
 * @param value
 * @category Is
 */
function isObject<T extends object>(value: unknown): value is { [P in keyof T]?: unknown } {
  return value === Object(value);
}

/**
 * isObjectLike({}) => true
 * isObjectLike([1, 2, 3]) => true
 * isObjectLike(Function) => false
 * isObjectLike(null) => false
 * @category Is
 */
export function isObjectLike<T>(value: unknown): value is T {
  return typeof value === 'object' && value !== null;
}

/**
 * 判断是否 plan object 通过 "{}" 或者 "new Object" 创建的
 * @param value
 * @category Is
 */
export function isPlanObject<T extends object>(
  value: unknown,
): value is { [P in keyof T]?: unknown } {
  if (!isObject(value) || (value as HTMLElement).nodeType || isWindow(value)) {
    return false;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

export default isObject;
