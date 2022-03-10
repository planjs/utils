import { EventTarget, Event } from 'event-target-shim';

export class AbortError extends Error {
  name = 'AbortError';
  message = 'Aborted';
}

export class AbortSignal extends EventTarget {
  aborted = false;
}

export class AbortController {
  signal = new AbortSignal();

  abort = () => {
    const abortEvent = new Event('abort');

    this.signal.dispatchEvent(abortEvent);
    this.signal.aborted = true;
  };
}

class AbortablePromise<T> extends Promise<T> {
  abortController: AbortController;

  constructor(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
      signal: AbortSignal,
    ) => void,
    abortController = new AbortController(),
  ) {
    super((resolve, reject) => {
      executor(resolve, reject, abortController.signal);
      abortController.signal.addEventListener('abort', () => {
        reject(new AbortError());
      });
    });
    this.abortController = abortController;
  }

  then<TResult1 = T, TResult2 = never>(
    onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): AbortablePromise<TResult1 | TResult2>;
  then(onFulfilled, onRejected) {
    return new AbortablePromise<T>((resolve, reject) => {
      const onSettled = (fn, value, callback) => {
        if ('function' === typeof callback) {
          value = callback(value);
          return resolve(value);
        }
        fn(value);
      };
      super.then(
        (value) => onSettled(resolve, value, onFulfilled),
        (reason) => onSettled(reject, reason, onRejected),
      );
    }, this.abortController);
  }

  catch<TResult = never>(
    onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
  ): AbortablePromise<T | TResult>;
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  abort() {
    return new AbortablePromise((resolve, reject) => {
      Promise.resolve().then(() => {
        this.abortController.abort();
        this.then(resolve, reject);
      });
    }, this.abortController);
  }

  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>,
      T10 | PromiseLike<T10>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
    ],
  ): AbortablePromise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(
    values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>],
  ): AbortablePromise<[T1, T2, T3]>;
  static all<T1, T2>(
    values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>],
  ): AbortablePromise<[T1, T2]>;
  static all<T>(values: readonly (T | PromiseLike<T>)[]): AbortablePromise<T[]> {
    return new AbortablePromise((resolve, reject) => {
      Promise.all(values).then(resolve, reject);
    });
  }

  static race<T>(values: readonly T[]): AbortablePromise<T extends PromiseLike<infer U> ? U : T> {
    return new AbortablePromise((resolve, reject) => {
      Promise.race(values).then(resolve, reject);
    });
  }

  static resolve(): AbortablePromise<void>;
  static resolve<T>(value: T | PromiseLike<T>): AbortablePromise<T>;
  static resolve(value?) {
    return new AbortablePromise((resolve, reject) => {
      Promise.resolve(value).then(resolve, reject);
    });
  }

  static reject<T = never>(reason?: any): Promise<T>;
  static reject(value?) {
    return new AbortablePromise((resolve, reject) => {
      Promise.reject(value).then(resolve, reject);
    });
  }
}

export default AbortablePromise;
