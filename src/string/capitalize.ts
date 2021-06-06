/**
 * 首字母大写
 * @param str
 */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;
