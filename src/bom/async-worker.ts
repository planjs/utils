type CB = (payload?: any) => void;

function asyncWorker(ctx: Worker) {
  const handlers: Array<CB> = [];

  function task<T, P = any>(payload: P): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const messageChannel = new MessageChannel();
      ctx.postMessage(payload, [messageChannel.port2]);
      messageChannel.port1.onmessage = (ev) => {
        resolve(ev.data);
        messageChannel.port2.close();
      };
      messageChannel.port1.onmessageerror = reject;
    });
  }

  function processor(fn: CB) {
    handlers.push(fn);
  }

  ctx.onmessage = (ev) => {
    handlers.forEach((handler) => {
      handler(ev.data);
    });
  };

  return {
    task,
    processor,
  };
}

export default asyncWorker;
