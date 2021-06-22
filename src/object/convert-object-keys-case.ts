type UppercaseDictionary<T> = {
  [K in keyof T as `${Uppercase<K & string>}`]: T[K];
};
type LowercaseDictionary<T> = {
  [K in keyof T as `${Lowercase<K & string>}`]: T[K];
};

/**
 * 转换对象中的key为大小写
 * @param obj
 * @param action {toLowerCase|toLowerCase} default toLowerCase
 * @return object
 * @category Object
 */
function convertObjectKeysCase<T extends object>(
  obj: T,
  action?: 'toLowerCase',
): LowercaseDictionary<T>;
function convertObjectKeysCase<T extends object>(
  obj: T,
  action?: 'toUpperCase',
): UppercaseDictionary<T>;
function convertObjectKeysCase<T extends object>(
  obj: T,
  action: 'toLowerCase' | 'toUpperCase' = 'toLowerCase',
) {
  return Object.keys(obj).reduce(function (accum, key) {
    accum[key[action]()] = obj[key];
    return accum;
  }, {});
}

export default convertObjectKeysCase;
