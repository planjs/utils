import global from '../global';
import { ssrDocument } from './document';
import requestAnimationFrame from './requestAnimationFrame';
import cancelAnimationFrame from './cancelAnimationFrame';
import isObject from '../is/is-Object';

export const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: '',
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {},
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame,
};

function extend(target: any = {}, src: any = {}) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === 'undefined') target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key])) {
      extend(target[key], src[key]);
    }
  });
}

/**
 * 程序入口处调用
 * 使用global代替window
 */
export function shim() {
  return extend(global, ssrWindow);
}
