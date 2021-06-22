/**
 * 判断是否为function
 * https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
 * @param func
 * @category Is
 */
function isFunction(func: any): func is Function {
  return func && {}.toString.call(func) === '[object Function]';
}

export default isFunction;
