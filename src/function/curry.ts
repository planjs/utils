function curry(fn, len = fn.length) {
  return function (...args) {
    if (args.length && args.length < len) {
      return curry(fn.bind(null, ...args), len - args.length);
    } else {
      return fn(...args);
    }
  };
}

export default curry;
