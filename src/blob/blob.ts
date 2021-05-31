import { REG_DATA_URL } from '../regex_constant';

/**
 * base64 转换成 Blob
 * @param dataUrl
 * @return {Blob}
 */
export function dataUrl2Blob(dataUrl: string): Blob {
  if (!REG_DATA_URL.test(dataUrl)) throw new Error(`${dataUrl} is not a data url`);
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

/**
 * 获取远程文件blob
 * @param url 需要允许跨域
 */
export function getBlobByXHR(url: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(this.response);
      }
    };
    xhr.onerror = function (error) {
      reject(error);
    };
    xhr.ontimeout = function (error) {
      reject(error);
    };
    xhr.send();
  });
}
