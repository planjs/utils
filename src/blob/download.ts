import { dataUrl2Blob } from './blob';
import { imgToBlobUrl } from './img-to-blob';

/**
 * 下载文件
 * @param path {url|data url|blob}
 * @param fileName
 */
export function downloadFile(path: string | Blob, fileName: string) {
  const a = document.createElement('a');
  const event = new MouseEvent('click');
  a.download = fileName;
  a.href = path instanceof Blob ? URL.createObjectURL(path) : path;

  if (typeof path === 'string') {
    try {
      a.href = URL.createObjectURL(dataUrl2Blob(path));
    } catch (e) {}
  }

  if (path instanceof Blob) {
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(a.href);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
  }

  document.body.appendChild(a);
  a.dispatchEvent(event);
  document.body.removeChild(a);
}

/**
 * 下载图片，如果是跨域图片需要用这个方法，同域等也可以直接用 downloadFile
 * @note 浏览器不要开拦截弹窗工具。。。
 * @param path
 * @param fileName
 * @param opt
 */
export function canvasDownloadImage(
  path: string,
  fileName: string,
  opt?: {
    type?: string;
    quality?: any;
  },
) {
  return imgToBlobUrl(path, opt).then((res) => downloadFile(res, fileName));
}
