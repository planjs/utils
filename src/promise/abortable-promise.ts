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

// @ts-ignore
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

  static resolve<T>(value: T | PromiseLike<T>): AbortablePromise<T> {
    return new AbortablePromise((resolve, reject) => {
      Promise.resolve(value).then(resolve, reject);
    });
  }
}

export default AbortablePromise;
