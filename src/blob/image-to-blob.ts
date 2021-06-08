import dataURLToBlob from '../blob/dataURL-to-blob';
import memoize from '../promise/memoize';

/**
 * 创建一个img元素，获取img元素
 * @param src
 * @param crossOrigin
 * @return {Promise<HTMLImageElement>}
 */
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
 * @return {Promise<Blob>}
 */
export function imageToBlobUrl(
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
      const dataUrl = dataURLToBlob(data);
      resolve(dataUrl);
    }, reject);
  });
}

/**
 * 相同路径的blob会被缓存
 */
export const memoizeImgToBlobUrl = memoize(imageToBlobUrl);
