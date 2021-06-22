/**
 * 写cookies
 * @param {string} name 写cookie的key
 * @param {string|number} value 写cookie的值
 * @param {number} day 存储的时间，默认30天
 * @category Bom
 */
export const setCookie = (name: string, value: string | number, day: number = 30): void => {
  const exp = new Date();
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + escape(value + '') + ';path=/;expires=' + exp.toUTCString();
};

/**
 * 读取cookies
 * @param {string} name 要获取的cookie名称
 * @param {number|boolean} type 是否直接获取对应的值，若存入真值，则直接返回，否则进行解码
 * @category Bom
 */
export const getCookie = (name: string, type: number | boolean = 0): string | null => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return type ? arr[2] : unescape(arr[2]);
  }
  return null;
};

/**
 * 删除cookie
 * @param name 删除的cookie名称
 * @category Bom
 */
export const delCookie = (name: string) => {
  const ex: Date = new Date();
  ex.setTime(ex.getTime() - 1);
  document.cookie = name + '=; expires=' + ex.toUTCString() + ';path=/';
};
