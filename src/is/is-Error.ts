import getType from './get-type';
import { isObjectLike } from './is-Object';

/**
 * 是否为Error类型
 * @param value
 * @category Is
 */
function isError(value: any): value is Error {
  if (!isObjectLike(value)) {
    return false;
  }
  const tag = getType(value);
  return tag === 'Error' || tag === 'DOMException';
}

export default isError;
