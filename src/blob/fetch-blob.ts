/**
 * 通过myFetch获取远程资源blob
 * @param url
 * @param options
 */
function fetchBlob(
  url: string,
  options?: {
    headers: Record<string, string>;
    credentials?: 'include' | 'omit';
  },
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.withCredentials = options?.credentials === 'include';

    if (options?.headers) {
      for (const i in options?.headers) {
        xhr.setRequestHeader(i, options.headers[i]);
      }
    }

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

export default fetchBlob;
