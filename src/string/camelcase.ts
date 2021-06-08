/**
 * 转换为驼峰
 * @param str
 * @example
 * @example
 * hello-word -> helloWord
 * hello_word -> helloWord
 * hello.word -> helloWord
 */
function camelcase(str: string) {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
}

export default camelcase;
