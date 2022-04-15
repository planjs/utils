import isFunction from './is-Function';
import isObject from './is-Object';

/**
 * 判断是否为平台原生对象
 * @link https://davidwalsh.name/detect-native-function
 * @example
 *
 * isNative(window) // true
 * isNative(alert) // true
 * @category Is
 */
function isNative(value) {
  const toString = Object.prototype.toString;
  const fnToString = Function.prototype.toString;
  const regxHostCtor = /^[object .+?Constructor]$/;
  const reNative = RegExp(
    '^' +
      String(toString)
        // eslint-disable-next-line no-useless-escape
        .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
        // eslint-disable-next-line no-useless-escape
        .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );

  return isFunction(value)
    ? reNative.test(fnToString.call(value))
    : (value && isObject(value) && regxHostCtor.test(toString.call(value))) || false;
}

export default isNative;
