import getType from './get-type';

/**
 * 是否为Map类型
 * @param value
 * @category Is
 */
function isSymbol(value: any): value is Map<any, any> {
  return getType(value) === 'Map';
}

export default isSymbol;
