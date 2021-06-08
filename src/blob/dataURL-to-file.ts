import { REG_DATA_URL } from '../regex_constant';

/**
 * data64 转化成 File对象
 */
function dataURLtoFile(dataUrl: string, filename: string) {
  if (!REG_DATA_URL.test(dataUrl)) throw new Error(`${dataUrl} is not a data url`);
  const arr = dataUrl.split(',');
  const mime = arr[0]!.match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default dataURLtoFile;
