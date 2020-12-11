/**
 * 判断是否为window对象
 * @param value
 */
function isWindow(value): value is Window {
  return (
    value !== null &&
    value === value.window &&
    value.document &&
    value.location &&
    value.alert &&
    value.setInterval
  );
}

export default isWindow;
