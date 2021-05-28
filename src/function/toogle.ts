/**
 * 两个值做切换
 * @param defaultValue
 * @param reverseValue
 */
function toggle<D, R>(
  defaultValue: D,
  reverseValue: R,
): {
  value: D | R;
  toggle: (value?: D | R) => void;
  setLeft: () => void;
  setRight: () => void;
} {
  let value: D | R = defaultValue;
  return {
    value,
    toggle() {
      value = value === defaultValue ? reverseValue : defaultValue;
    },
    setLeft() {
      value = defaultValue;
    },
    setRight() {
      value = reverseValue;
    },
  };
}

export default toggle;
