import requestAnimationFrame from './requestAnimationFrame';

/**
 * 时间内，滚动条平滑滚到指定位置
 * @param to
 * @param duration
 * @category Bom
 */
function windowSmoothScrolling(to: number, duration: number) {
  function _setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
  }

  function _getScrollTop() {
    return (
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    );
  }

  if (duration < 0) {
    _setScrollTop(to);
    return;
  }

  const diff = to - _getScrollTop();

  if (diff === 0) return;

  const step = (diff / duration) * 10;

  requestAnimationFrame(function () {
    if (Math.abs(step) > Math.abs(diff)) {
      _setScrollTop(_getScrollTop() + diff);
    }

    _setScrollTop(_getScrollTop() + diff);

    if ((diff > 0 && _getScrollTop() >= to) || (diff < 0 && _getScrollTop() <= to)) {
      return;
    }

    windowSmoothScrolling(to, duration - 16);
  });
}

export default windowSmoothScrolling;
