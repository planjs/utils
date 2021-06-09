import fetch from '../bom/fetch';

/**
 * 通过myFetch获取远程资源blob
 * @param url
 * @param options
 */
function fetchBlob(url: string, options?: Parameters<typeof fetch>[1]): Promise<Blob> {
  return fetch(url, options).then((res) => res.blob());
}

export default fetchBlob;
