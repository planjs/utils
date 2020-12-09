/**
 * 浅比较两个值
 * @param objA
 * @param objB
 * @param compare
 * @param compareContext
 * https://github.com/dashed/shallowequal
 */
function shallowEqual<Context = any>(
  objA: any,
  objB: any,
  compare?: (this: Context, objA: any, objB: any, indexOrKey?: number | string) => boolean | void,
  compareContext?: Context,
) {
  let ret = compare ? compare.call(compareContext!, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    const valueA = objA[key];
    const valueB = objB[key];

    ret = compare ? compare.call(compareContext!, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
}

export default shallowEqual;
