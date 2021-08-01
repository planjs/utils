import { prefSetTimeout, clearPrefTimeout } from '../function/pref-setTimeout';
import { isPlanObject } from '../is/is-Object';

type CB = <P = any, R = any>(payload?: P) => Promise<R>;

export type AsyncWorkerTaskOptions = {
  /**
   * 超时退出promise
   */
  timeout?: number;
  /**
   * 根据设置的key开启并发控制
   */
  concurrent?:
    | {
        key: string;
        max: number;
      }
    | false;
  /**
   * 线程
   */
  maxThreads?: number;
};

const ERRKey = '__err__';

function asyncWorker(ctx: Worker) {
  const handlers: Array<CB> = [];

  function _onMessage(ev: MessageEvent) {
    const messagePort = ev.ports[0];
    handlers.forEach((handler) => {
      handler(ev.data)
        .then(
          (result) => {
            messagePort.postMessage(result);
          },
          (err) => {
            messagePort.postMessage({ [ERRKey]: err });
          },
        )
        .finally(() => {
          messagePort.close();
        });
    });
  }

  function postMessage<T, P = any>(payload: P, opts?: AsyncWorkerTaskOptions): Promise<T> {
    let timer: number = 0;
    const { port1, port2 } = new MessageChannel();

    return new Promise<T>((resolve, reject) => {
      port1.onmessage = (ev) => {
        if (isPlanObject(ev.data) && ERRKey in ev.data) {
          reject(ev.data[ERRKey]);
        } else {
          resolve(ev.data);
        }
      };
      port1.onmessageerror = reject;

      ctx.postMessage(payload, [port2]);

      if (opts?.timeout) {
        timer = prefSetTimeout(() => {
          reject(new Error('timeout'));
        }, opts.timeout);
      }
    }).finally(() => {
      port1.close();
      timer && clearPrefTimeout(timer);
    });
  }

  function onmessage(fn: CB) {
    handlers.push(fn);
  }

  function _listen() {
    ctx.addEventListener('message', _onMessage);
  }

  function setCtx(c: Parameters<typeof asyncWorker>[0]) {
    ctx.removeEventListener('message', _onMessage);
    ctx = c;
    _listen();
  }

  _listen();

  return {
    setCtx,
    postMessage,
    onmessage,
  };
}

export default asyncWorker;
