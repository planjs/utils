import { dataUrl2Blob } from '../blob/blob';
import memoize from '../promise/memoize';

export function loadImage(src: string, crossOrigin?: string | null): Promise<HTMLImageElement> {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }
    img.onload = function () {
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * 图片通过canvas转换成blob
 * @param url
 * @param opt
 */
export function imgToBlobUrl(
  url: string,
  opt?: {
    type?: string;
    quality?: any;
  },
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    loadImage(url, 'anonymous').then((img) => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.drawImage(img, 0, 0);
      const data = canvas.toDataURL(opt?.type ?? 'image/png', opt?.quality);
      const dataUrl = dataUrl2Blob(data);
      resolve(dataUrl);
    }, reject);
  });
}

/**
 * 相同路径的blob会被缓存
 */
export const memoizeImgToBlobUrl = memoize(imgToBlobUrl);
