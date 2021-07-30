import { isPlanObject } from '../is/is-Object';

/**
 * 字符串format
 * @param text
 * @param args
 * @example
 * format('hello {0}', 'bob') // hello bob
 */
function format(text: string, args: Record<string, string | number>): string;
function format(text: string, ...args: Array<string | number>): string;
function format(text, ...args): string {
  const obj = isPlanObject(args[0]) ? args[0] : args;
  for (const key in obj) {
    text = text.replace(new RegExp('\\{' + key + '\\}', 'gi'), obj[key]);
  }
  return text;
}

export default format;
