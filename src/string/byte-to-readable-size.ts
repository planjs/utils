/**
 * 转换kb为可读字符串
 * @param value
 * @param fractionDigits
 */
function byteToReadableSize(value: number, fractionDigits: number = 2) {
  if (!value) {
    return '0 Bytes';
  }
  const unitArr = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let index = 0;
  const srcSize = parseFloat(String(value));
  index = Math.floor(Math.log(srcSize) / Math.log(1024));
  const size = (srcSize / Math.pow(1024, index)).toFixed(fractionDigits);
  return size + unitArr[index];
}

export default byteToReadableSize;
