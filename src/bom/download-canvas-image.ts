import canvasImageToBlob from '../blob/canvas-image-to-blob';
import downloadFile from './download-file';

/**
 * 下载图片，如果是跨域图片需要用这个方法，同域等也可以直接用 downloadFile
 * @note 浏览器不要开拦截弹窗工具。。。
 * @param path 远程文件地址
 * @param fileName 下载文件名
 * @param opt
 */
function downloadCanvasImage(
  path: string,
  fileName: string,
  opt?: Parameters<typeof canvasImageToBlob>[1],
) {
  return canvasImageToBlob(path, opt).then((res) => downloadFile(res, fileName));
}

export default downloadCanvasImage;
