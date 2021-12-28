/**
 * get max call stack
 */
function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    return 1;
  }
}
export default computeMaxCallStackSize;
