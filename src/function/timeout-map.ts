type TimeoutMapOptions<K, V> = {
  /**
   * expiration time
   */
  timeout?: number;
  /**
   * delete handler
   */
  onTimeout?: (key: K, value: V, map: TimeoutMap<K, V>) => void;
};

// setTimeout 和 存缓存时间 看哪个更高效
class TimeoutMap<K, V> extends Map<K, V> {
  private _timeouts: Map<K, ReturnType<typeof setTimeout>> = new Map();

  private readonly _options: TimeoutMapOptions<K, V> = {};

  constructor(entries?: readonly (readonly [K, V])[] | null, options?: TimeoutMapOptions<K, V>) {
    super();
    if (options) {
      this._options = options;
    }
    if (entries) {
      for (const element of entries) this.set(element[0], element[1]);
    }
  }

  set(key: K, value: V, options?: TimeoutMapOptions<K, V>) {
    this._setTimeout(key, options);
    return super.set(key, value);
  }

  delete(key) {
    this._clearTimeout(key);
    return super.delete(key);
  }

  clear() {
    for (const key of this._timeouts.keys()) {
      if (this._timeouts.has(key)) {
        this._clearTimeout(key);
      }
    }
    return super.clear();
  }

  private _setTimeout = (key: K, config?: TimeoutMapOptions<K, V>) => {
    const _config = { ...this._options, ...config };
    if (!_config.timeout || _config.timeout === Infinity) return;

    this._clearTimeout(key);

    const timeout = _config.timeout!;
    this._timeouts.set(
      key,
      setTimeout(() => {
        this.delete(key);
        _config.onTimeout?.(key, super.get(key)!, this);
      }, timeout),
    );
  };

  private _clearTimeout(key: K): boolean {
    const timeout = this._timeouts.get(key);
    if (timeout !== null) {
      this._timeouts.delete(key);
      clearTimeout(timeout!);
      return true;
    }
    return false;
  }
}

export default TimeoutMap;
