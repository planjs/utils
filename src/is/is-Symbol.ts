import getType from './get-type';

/**
 * 是否为Symbol类型
 * @param value
 */
function isSymbol(value: any): value is symbol {
  return getType(value) === 'Symbol';
}

export default isSymbol;
