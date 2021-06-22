import getType from './get-type';

const regTyped = /^(Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array$/;

/**
 * check typed array
 * @param value
 * @category Is
 */
function isTypedArray(
  value: any,
): value is
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray {
  return regTyped.test(getType(value));
}

export default isTypedArray;
