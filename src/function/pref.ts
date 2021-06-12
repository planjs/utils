import type { PropertyName } from '../type';

type RecorderItem = { start: number; end?: number };

const defaultId = Symbol('pref_default_id');

/**
 * 记录程序运行时间
 */
class Pref {
  private readonly recorder = new Map<PropertyName, RecorderItem>();

  /**
   * 开始记录
   * @param id
   */
  start = (id: PropertyName = defaultId) => {
    this.recorder.set(id, {
      start: Date.now(),
    });
  };

  /**
   * 执行完成
   * @param id
   */
  stop = (id: PropertyName = defaultId) => {
    if (!this.recorder.get(id)) {
      throw new Error('id does not exist, start must be executed first.');
    }
    const end = Date.now();
    const item = this.recorder.get(id);
    this.recorder.set(id, { ...item!, end });
  };

  /**
   * 删除记录
   * @param ids
   */
  remove = (...ids: PropertyName[]) => {
    if (!ids.length) {
      ids.push(defaultId);
    }
    for (const id of ids) {
      this.recorder.delete(id);
    }
  };

  /**
   * 清理掉所有已经stop的记录
   */
  clear = () => {
    for (const [key, record] of this.recorder) {
      if (record.end) {
        this.recorder.delete(key);
      }
    }
  };

  /**
   * 清理掉所有记录
   */
  flush = () => {
    this.recorder.clear();
  };

  /**
   * 记录promise执行时间
   * @param promise
   * @param id
   */
  recordPromise = (promise: Promise<any>, id: PropertyName = defaultId) => {
    this.start(id);
    const stop = () => this.stop(id);
    promise.then(stop, stop);
  };
}

const pref = new Pref();

export default pref;
