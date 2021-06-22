import getType from './get-type';

/**
 * 是否为File类型
 * @param value
 * @category Is
 */
function isFile(value: any): value is File {
  return getType(value) === 'File';
}

export default isFile;
