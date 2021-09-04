import type { Dictionary } from '../type';

type ToObjectArrayOptions = {
  /**
   * @default value
   */
  keyPropName?: string;
  /**
   * @default label
   */
  valuePropName?: string;
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
  opts?: ToObjectArrayOptions,
): Array<T> {
  const { keyPropName = 'value', valuePropName = 'label' } = opts || {};
  const result: any[] = [];
  for (const k in dict) {
    result.push({
      [keyPropName]: k,
      [valuePropName]: dict[k],
    });
  }
  return result;
}

export default toObjectArray;
