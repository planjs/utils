/**
 * 使用 messageChannel 实现 structuralClone
 * @param obj
 */
function structuralClone<T>(obj: T) {
  return new Promise<T>((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = (ev) => resolve(ev.data);
    port1.postMessage(obj);
  });
}

export default structuralClone;
