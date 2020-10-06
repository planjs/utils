export default [
  {
    bundler: 'babel',
    esm: true,
    runtimeHelpers: true,
    sourcemap: true,
  },
  {
    bundler: 'babel',
    cjs: true,
    runtimeHelpers: false,
    sourcemap: true,
  },
];
