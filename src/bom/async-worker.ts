import incrementId from '../function/increment-id';

type AsyncWorkerEventType = string | number | symbol;

type AsyncWorkerPayloadWarp<Payload = any> = {
  seq: number;
  type: AsyncWorkerEventType;
  payload: Payload;
};

type ExecResult<T> = Promise<T> & { id: number };

function asyncWorker<TypeMap extends Record<AsyncWorkerEventType, { payload: any; result: any }>>(
  ctx: Worker,
) {
  const genSeq = incrementId();
  const eventMap: Record<
    AsyncWorkerEventType,
    Array<
      (
        payload: TypeMap[keyof TypeMap]['payload'],
        callback: () => TypeMap[keyof TypeMap]['result'],
      ) => void
    >
  > = {};

  function postMessage<T>(payload: AsyncWorkerPayloadWarp<T>) {
    ctx.postMessage(payload);
  }

  function exec(type: keyof TypeMap, payload: TypeMap[keyof TypeMap]['payload']) {
    const result = new Promise((resolve, reject) => {
      result.id = genSeq();

      postMessage({
        seq: result.id,
        type,
        payload,
      });

      console.log(resolve, reject);
    }) as ExecResult<TypeMap[keyof TypeMap]>;
    return result;
  }

  function handle(
    type: keyof TypeMap,
    handler: (
      payload: TypeMap[keyof TypeMap]['payload'],
      callback: () => TypeMap[keyof TypeMap]['result'],
    ) => void,
  ) {
    if (!eventMap[type]) {
      eventMap[type] = [];
    }
    eventMap[type].push(handler);
  }

  function clear() {}

  return {
    exec,
    handle,
    clear,
  };
}

export default asyncWorker;
