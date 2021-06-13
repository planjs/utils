import isNaN from './is-NaN';
import isInfinite from './is-Infinite';

/**
 * 是否为数字
 * @note 字符串数字也是数字
 * @param value
 */
function isDigit(value): value is number | bigint {
  return !isNaN(+value) && !isInfinite(value);
}

export default isDigit;
