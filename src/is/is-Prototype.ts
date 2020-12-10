/**
 * 是否Prototype
 * @param value
 */
function isPrototype(value) {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype;
  return value === proto;
}

export default isPrototype;
