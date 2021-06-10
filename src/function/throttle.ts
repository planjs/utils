import type { AnyFn } from '../type';
import debounce from './debounce';

export type ThrottleSettings = {
  leading?: boolean;
  trailing?: boolean;
};

function throttle<T extends AnyFn>(func: T, wait?: number, options?: ThrottleSettings) {
  const { leading = true, trailing = true } = options || {};

  return debounce<T>(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  });
}

export default throttle;
