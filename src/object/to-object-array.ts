import type { Dictionary } from '../type';

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
  callbackfn?: (k: string, v: T[keyof T]) => T;
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
 * ```
 * @category Object
 */
function toObjectArray<T extends Record<string, any> = { label: any; value: string }>(
  dict: Dictionary<any>,
  opts?: ToObjectArrayOptions<T>,
): Array<T> {
  const { keyPropName = 'value', valuePropName = 'label' } = opts || {};
  const result: any[] = [];
  const fn: ToObjectArrayOptions<T>['callbackfn'] = (k, v) => {
    if (opts?.callbackfn) {
      return opts.callbackfn(k, v);
    } else {
      return {
        [keyPropName]: k,
        [valuePropName]: dict[k],
      } as T;
    }
  };
  for (const k in dict) {
    result.push(fn(k, dict[k]));
  }
  return result;
}

export default toObjectArray;
