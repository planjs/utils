import getType from './get-type';

/**
 * 是否为RegExp类型
 * @param value
 * @category Is
 */
function isRegExp(value: any): value is RegExp {
  return getType(value) === 'RegExp';
}

export default isRegExp;
