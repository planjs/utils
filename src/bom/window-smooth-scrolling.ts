/**
 * 时间内，滚动条平滑滚到指定位置
 * @param to
 * @param duration
 */
function windowSmoothScrolling(to, duration) {
  function _setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
  }

  function _getScrollTop() {
    return (
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    );
  }

  const _requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      // @ts-ignore
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  if (duration < 0) {
    _setScrollTop(to);
    return;
  }

  const diff = to - _getScrollTop();

  if (diff === 0) return;

  const step = (diff / duration) * 10;

  _requestAnimFrame(function () {
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
