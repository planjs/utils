/**
 * 创建一个img元素，获取img元素
 * @param src
 * @param crossOrigin
 * @return {Promise<HTMLImageElement>}
 * @category Dom
 */
export function loadImageElement(
  src: string,
  crossOrigin: string | null = 'anonymous',
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
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

export default loadImageElement;
