/**
 * 复制到剪切板
 * @param textValue
 */
function executeCopy(textValue: string) {
  const input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = textValue;
  input.select();
  // 将内容复制到剪贴板里面去。
  document.execCommand('Copy');
  input.remove();
}

export default executeCopy;
