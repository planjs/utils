import { REG_DATA_URL } from '../regex_constant';
import { ensure } from '../debug';

/**
 * base64 转换成 Blob
 * @param dataUrl
 * @return {Blob}
 */
function dataURLToBlob(dataUrl: string): Blob {
  ensure(!REG_DATA_URL.test(dataUrl), `${dataUrl} is not a data url`);
  const arr = dataUrl.split(',');
  const mime = arr[0]!.match(/:(.*?);/)?.[1];
  const bStr = atob(arr[1]);
  let n = bStr.length;
  const unit8Array = new Uint8Array(n);
  while (n--) {
    unit8Array[n] = bStr.charCodeAt(n);
  }
  return new Blob([unit8Array], { type: mime });
}

export default dataURLToBlob;
