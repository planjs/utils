import { prefSetTimeout, clearPrefTimeout } from '../function/pref-setTimeout';
import isObject from '../is/is-Object';
import asyncPool from '../promise/async-pool';

type CB = (payload: MessageEvent) => Promise<any> | any;

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
   * TODO
   */
  maxThreads?: number;
  transfer?: Transferable[];
};

function asyncWorker(ctx: Worker) {
  const handlers: Array<CB> = [];
  const ctrlMap: Record<string, ReturnType<typeof asyncPool>> = {};

  function _onMessage(ev: MessageEvent) {
    const messagePort = ev.ports[0];
    if (messagePort) {
      handlers.forEach((handler) => {
        Promise.resolve(handler(ev))
          .then(
            (result) => {
              messagePort.postMessage(result);
            },
            (err) => {
              messagePort.postMessage({ [asyncWorker.ERRKey]: err });
            },
          )
          .catch((err) => {
            console.log('[asyncWorker] onmessage error', err);
          })
          .finally(() => {
            messagePort.close();
          });
      });
    }
  }

  function postMessage<T, P = any>(payload: P, opts?: AsyncWorkerTaskOptions): Promise<T> {
    let timer: number = 0;
    const { port1, port2 } = new MessageChannel();

    const _doPost = () => {
      return new Promise<T>((resolve, reject) => {
        port1.onmessage = (ev) => {
          if (isObject(ev.data) && asyncWorker.ERRKey in ev.data) {
            reject(ev.data[asyncWorker.ERRKey]);
          } else {
            resolve(ev.data);
          }
        };
        port1.onmessageerror = reject;

        ctx.postMessage(payload, [port2, ...(opts?.transfer || [])]);

        if (opts?.timeout) {
          timer = prefSetTimeout(() => {
            reject(new Error('timeout'));
          }, opts.timeout);
        }
      }).finally(() => {
        port1.close();
        timer && clearPrefTimeout(timer);
      });
    };

    // 启用并发控制
    if (opts?.concurrent) {
      if (!ctrlMap[opts?.concurrent.key]) {
        ctrlMap[opts?.concurrent.key] = asyncPool({ maxConcurrency: opts.concurrent.max });
      }
      return ctrlMap[opts?.concurrent.key].executor(_doPost);
    }

    return _doPost();
  }

  /**
   * 只处理使用asyncWorker postMessage 发送的事件
   * @param fn 返回值作为 postMessage 的返回结果
   */
  function register(fn: CB) {
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
    register,
  };
}

asyncWorker.ERRKey = '__err__';

export default asyncWorker;
