/**
 * 异步请求，或者promise内window open被拦截
 * @param url
 * @category Bom
 */
function openWindow(url: string) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default openWindow;
