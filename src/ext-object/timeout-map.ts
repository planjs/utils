type TimeoutMapConstructorOptions = {
  /**
   * Control storage length
   * @default undefined not Control
   */
  maxLength?: number;
};

type TimeoutMapOptions<K, V> = TimeoutMapConstructorOptions & {
  /**
   * expiration interval
   * @default undefined no timeout
   */
  timeout?: number;
  /**
   * Whether to delete passively
   * onTimeout will not be called on time
   * @default true
   */
  passiveDeletion?: boolean;
  /**
   * delete handler
   */
  onTimeout?: (key: K, value: V, options: TimeoutMapKeyArgs<K, V>, map: TimeoutMap<K, V>) => void;
  /**
   * when over limit
   */
  onOverLimit?: (key: K, value: V, options: TimeoutMapKeyArgs<K, V>, map: TimeoutMap<K, V>) => void;
};

interface TimeoutMapKeyArgs<K, V> {
  timerId: ReturnType<typeof setTimeout>;
  expirationTime: number;
  options: TimeoutMapOptions<K, V>;
}

class TimeoutMap<K, V> extends Map<K, V> {
  private readonly _keyArgs: Map<K, TimeoutMapKeyArgs<K, V>> = new Map();

  private readonly _options: TimeoutMapOptions<K, V> = {};

  constructor(entries?: readonly (readonly [K, V])[] | null, options?: TimeoutMapOptions<K, V>) {
    super(entries);
    if (options) {
      this._options = {
        passiveDeletion: true,
        ...options,
      };
    }
  }

  get(key: K): V | undefined {
    this._cleanOverLimitElement();
    return super.get(key);
  }

  has(key: K): boolean {
    this._cleanOverLimitElement();
    return super.has(key);
  }

  set(
    key: K,
    value: V,
    options?: Omit<TimeoutMapOptions<K, V>, keyof TimeoutMapConstructorOptions>,
  ) {
    this._setTimeout(key, options);
    this._cleanExpirationElement();
    this._cleanOverLimitElement();
    return super.set(key, value);
  }

  delete(key) {
    this._clearTimeout(key);
    this._keyArgs.delete(key);
    return super.delete(key);
  }

  clear() {
    for (const key of this._keyArgs.keys()) {
      this._clearTimeout(key);
    }
    this._keyArgs.clear();
    return super.clear();
  }

  private _mergeOptions = (options?: Partial<TimeoutMapOptions<K, V>>): TimeoutMapOptions<K, V> => {
    return {
      ...this._options,
      ...options,
    };
  };

  private _setKeyArgs(k: K, args: Partial<TimeoutMapKeyArgs<K, V>>): TimeoutMapKeyArgs<K, V> {
    const _args = this._keyArgs.get(k);
    const opt = { ..._args, ...args } as TimeoutMapKeyArgs<K, V>;
    this._keyArgs.set(k, opt);
    return opt;
  }

  private _setTimeout = (key: K, options?: TimeoutMapOptions<K, V>) => {
    const _options = this._mergeOptions(options);
    this._setKeyArgs(key, { options: _options });

    if (!_options.timeout || _options.timeout === Infinity) return;

    this._clearTimeout(key);

    if (_options.passiveDeletion) {
      this._setKeyArgs(key, { expirationTime: Date.now().valueOf() + _options.timeout });
    } else {
      this._setKeyArgs(key, {
        timerId: setTimeout(() => {
          _options?.onTimeout?.(key, super.get(key)!, this._keyArgs.get(key)!, this);
          this.delete(key);
        }, _options.timeout),
      });
    }
  };

  private _cleanExpirationElement() {
    for (const [key, arg] of this._keyArgs) {
      if (arg.expirationTime && arg.expirationTime < Date.now().valueOf()) {
        arg.options?.onTimeout?.(key, super.get(key)!, this._keyArgs.get(key)!, this);
        this._keyArgs.delete(key);
        this.delete(key);
      }
    }
  }

  private _clearTimeout(key: K): boolean {
    const arg = this._keyArgs.get(key);
    if (arg?.timerId !== undefined) {
      this._keyArgs.delete(key);
      clearTimeout(arg!.timerId!);
      return true;
    }
    return false;
  }

  private _cleanOverLimitElement() {
    // TODO Prioritize the clearing of fast-expiring
    if (this._options.maxLength !== undefined && super.size > this._options.maxLength) {
      const limitKeys = [...super.keys()].slice(0, super.size - this._options.maxLength);
      limitKeys.forEach((key) => {
        const arg = this._keyArgs.get(key);
        if (arg) {
          arg.options?.onOverLimit?.(key, super.get(key)!, this._keyArgs.get(key)!, this);
        }
        this.delete(key);
      });
    }
  }
}

export default TimeoutMap;
