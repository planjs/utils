import type { Dictionary } from '../type';
import { isMap } from '../is';

type ToObjectArrayOptions<T> = {
  /**
   * @default value
   */
  keyPropName?: string;
  /**
   * @default label
   */
  valuePropName?: string;
  /**
   * 遍历key value
   */
  callbackfn?: (k: string, v: T[keyof T]) => T | void;
};

/**
 * object to array
 * @param dict {Dictionary<any>}
 * @param opts {ToObjectArrayOptions}
 *        @default { keyPropName: 'label', valuePropName: 'value' }
 * @example
 * ```ts
 * const a = { a: 1, b: 2 }
 * toObjectArray(a) // [{ value: 'a', label: 1 }, { value: 'b', label: 2 }]
 * const b = new Map([['a', 1], ['b', 2]])
 * toObjectArray(a) // [{ value: 'a', label: 1 }, { value: 'b', label: 2 }]
 * ```
 * @category Object
 */
function toObjectArray<T extends Record<string, any> = { label: any; value: string }>(
  dict: Dictionary<any>,
  opts?: ToObjectArrayOptions<T>,
): Array<T> {
  const { keyPropName = 'value', valuePropName = 'label' } = opts || {};
  const result: T[] = [];
  const fn: ToObjectArrayOptions<T>['callbackfn'] = (k, v) => {
    if (opts?.callbackfn) {
      return opts.callbackfn(k, v);
    }
    return {
      [keyPropName]: k,
      [valuePropName]: dict[k],
    } as T;
  };
  for (const [k, v] of isMap(dict) ? dict : Object.entries(dict)) {
    const item = fn(k, v);
    if (item) {
      result.push(item);
    }
  }
  return result;
}

export default toObjectArray;
