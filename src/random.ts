import { shuffle } from './array';

/**
 * 获取随机小写英文单词
 */
export function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * 获取随机大写英文单词
 */
export function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * 获取随机数字
 */
export function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * 获取随机符号
 */
export function getRandomSymbol() {
  const symbols = '~!@#$%^&*()_+{}":?><;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

/**
 * 生成一定长度随机数
 * @param len 长度
 * @param types 随机字符串需要包含的字符
 */
export function getRandomString(
  len: number,
  types: Array<keyof typeof randomFunc> = ['lower', 'upper', 'number', 'symbol'],
) {
  return shuffle(
    Array(len)
      .fill(undefined)
      .map((_, index) => index % types.length),
  ).reduce((acc, i) => (acc += randomFunc[types[i]]()), '');
}

/**
 * 生成不重复字符串
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + '';
  const randomNum = parseInt(String((1 + Math.random()) * 65536)) + '';
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * 获取随机bool值
 * @return {boolean} a random true/false
 */
export function getRandomBool() {
  return Math.random() >= 0.5;
}

/**
 * 获取一个介于 `min` 和 `max` 之间的随机浮点数。
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random floating point number
 */
export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * 获取一个介于 `min` 和 `max` 之间的随机整数。
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 获取随机颜色
 */
export function getRandomHexColor() {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}
