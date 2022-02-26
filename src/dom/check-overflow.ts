/**
 * Determines if the passed element is overflowing its bounds
 * @param el
 */
function checkOverflow(el: HTMLElement): boolean {
  const curOverflow = el.style.overflow;

  if (!curOverflow || curOverflow === 'visible') el.style.overflow = 'hidden';

  const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

  el.style.overflow = curOverflow;

  return isOverflowing;
}

export default checkOverflow;
