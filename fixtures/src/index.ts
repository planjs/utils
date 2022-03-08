import AbortablePromise from '../../src/promise/abortable-promise';

const promise = new AbortablePromise((resolve, reject) => {}).then(
  (res) => {
    console.log('resolve', res);
  },
  (err) => {
    console.log('reject', err);
  },
);

promise.abort().finally(() => {
  console.log(promise);
});
