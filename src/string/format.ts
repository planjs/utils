/**
 * 字符串format
 * @param text
 * @param args
 * @example
 * console.log(format('hello {0}', 'bob')) // hello bob
 */
function format(text: string, ...args: Array<string | number>): string {
  return text.replace(/\{(\d+)\}/g, (_, i) => {
    return String(args[i]);
  });
}

export default format;
