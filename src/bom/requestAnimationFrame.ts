import global from '../global';

/**
 * requestAnimationFrame polyfill
 */
const RAF: typeof requestAnimationFrame = (function () {
  return (
    global.requestAnimationFrame ||
    global.webkitRequestAnimationFrame ||
    global.mozRequestAnimationFrame ||
    global.oRequestAnimationFrame ||
    global.msRequestAnimationFrame ||
    function (callback) {
      return global.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default RAF;
