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
