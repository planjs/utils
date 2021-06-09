import dataURLToBlob from '../blob/dataURL-to-blob';

/**
 * 下载文件
 * @param path {url|data url|blob}
 * @param fileName
 */
function downloadFile(path: string | Blob, fileName: string) {
  const a = document.createElement('a');
  const event = new MouseEvent('click');
  a.download = fileName;
  a.href = path instanceof Blob ? URL.createObjectURL(path) : path;

  if (typeof path === 'string') {
    try {
      a.href = URL.createObjectURL(dataURLToBlob(path));
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

export default downloadFile;
