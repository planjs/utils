/**
 * 将blob对象转为DataUrl类型的数据
 * @param blob
 */
function blobToDataURL(blob: Blob | File): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      resolve(reader.result!);
    };
    reader.onerror = reject;
  });
}

export default blobToDataURL;
