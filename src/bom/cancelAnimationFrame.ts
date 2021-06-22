import global from '../global';

/**
 * cancelAnimationFrame polyfill
 * @category Bom
 */
const CAF: typeof cancelAnimationFrame = (function () {
  return (
    global.cancelAnimationFrame ||
    global.webkitCancelAnimationFrame ||
    global.mozCancelAnimationFrame ||
    global.oCancelAnimationFrame ||
    global.msCancelAnimationFrame ||
    function (handle) {
      clearTimeout(handle);
    }
  );
})();

export default CAF;
