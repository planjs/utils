function uncurry(fn) {
  return function (...args) {
    return args.reduce((fn, arg) => fn(arg), fn);
  };
}

export default uncurry;
