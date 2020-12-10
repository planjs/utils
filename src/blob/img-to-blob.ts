import { dataUrl2Blob } from '../blob/blob';
import memoize from '../promise/memoize';

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

    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = url;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.drawImage(img, 0, 0);
      const data = canvas.toDataURL(opt?.type ?? 'image/png', opt?.quality);
      const dataUrl = dataUrl2Blob(data);
      resolve(dataUrl);
    };

    img.onerror = reject;
  });
}

/**
 * 相同路径的blob会被缓存
 */
export const memoizeImgToBlobUrl = memoize(imgToBlobUrl);
