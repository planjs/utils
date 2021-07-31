import { prefSetTimeout, clearPrefTimeout } from '../function/pref-setTimeout';
import { isPlanObject } from '../is/is-Object';

type CB = <P = any, R = any>(payload?: P) => Promise<R>;

export type AsyncWorkerTaskOptions = {
  /**
   * 超时退出promise
   */
  timeout?: number;
  /**
   * 开启并发控制
   */
  concurrent?:
    | {
        key: string;
        max: number;
      }
    | false;
};

const ERRKey = '__err__';

function asyncWorker(ctx: Worker) {
  const handlers: Array<CB> = [];

  function onMessage(ev: MessageEvent) {
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

  function task<T, P = any>(payload: P, opts?: AsyncWorkerTaskOptions): Promise<T> {
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

  function cook(fn: CB) {
    handlers.push(fn);
  }

  function listen() {
    ctx.onmessage = onMessage;
  }

  function setCtx(c: Parameters<typeof asyncWorker>[0]) {
    ctx = c;
    listen();
  }

  listen();

  return {
    setCtx,
    listen,
    task,
    cook,
  };
}

export default asyncWorker;
