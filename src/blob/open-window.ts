import delay from '../promise/delay';

/**
 * 当promise 内执行window open 可能会被浏览器拦截
 * @param p
 */
export function warpPromiseOpenWindow(p: Promise<string>) {
  let tab = window.open('about:blank');
  return p
    .then((uri) => {
      tab!.location.href = uri;
      return delay(1000);
    })
    .then(() => {
      tab = null;
    });
}
