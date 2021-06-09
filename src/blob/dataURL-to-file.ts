import { REG_DATA_URL } from '../regex_constant';
import { ensure } from '../debug';

/**
 * data64 转化成 File对象
 */
function dataURLtoFile(dataUrl: string, filename: string) {
  ensure(!REG_DATA_URL.test(dataUrl), `${dataUrl} is not a data url`);
  const arr = dataUrl.split(',');
  const mime = arr[0]!.match(/:(.*?);/)?.[1];
  const bStr = atob(arr[1]);
  let n = bStr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default dataURLtoFile;
