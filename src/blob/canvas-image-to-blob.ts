import dataURLToBlob from '../blob/dataURL-to-blob';
import loadImageElement from '../dom/load-image-element';

/**
 * 图片通过canvas转换成blob
 * @param url
 * @param opt
 * @return {Promise<Blob>}
 */
function canvasImageToBlob(
  url: string,
  opt?: {
    type?: string;
    quality?: any;
  },
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    loadImageElement(url).then((img) => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.drawImage(img, 0, 0);
      const data = canvas.toDataURL(opt?.type ?? 'image/png', opt?.quality);
      const dataUrl = dataURLToBlob(data);
      resolve(dataUrl);
    }, reject);
  });
}

export default canvasImageToBlob;
