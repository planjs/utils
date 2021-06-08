type DecamelizeOpts = {
  /**
   * 切割字符串位置
   * @default /(?=[A-Z])/ 大写英文字母
   */
  split?: string;
  /**
   * 转换之后的分割符
   * @default _
   */
  separator?: string;
};

/**
 * 驼峰转换成其他格式
 * @param string
 * @param options
 * @example
 * decamelize('sayName'); // say_name
 */
function decamelize(string: string, options: DecamelizeOpts = {}) {
  const separator = options.separator || '_';
  const split = options.split || /(?=[A-Z])/;

  return string.split(split).join(separator).toLowerCase();
}

export default decamelize;
