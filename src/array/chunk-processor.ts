type Disposer = () => void;

function chunkProcessor<T>(
  observableArray: T[],
  processor: (item: T[]) => void,
  debounce = 0,
  maxChunkSize = 0,
): Disposer {
  return () => {};
}

export default chunkProcessor;
