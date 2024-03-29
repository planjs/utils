import { prefSetTimeout, clearPrefTimeout } from '../function/pref-setTimeout';

type TimeoutMapConstructorOptions = {
  /**
   * Control storage length
   * @default undefined not Control
   */
  maxLength?: number;
  /**
   * Priority cleaning type
   * @default filo
   */
  clearUpPriority?: 'shortPeriod' | 'longPeriod' | 'fifo' | 'filo';
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
  timerId: number;
  expirationTime: number;
  options: TimeoutMapOptions<K, V>;
}

/**
 * Map with set validity period
 * @category Object
 */
class TimeoutMap<K, V> extends Map<K, V> {
  private readonly _keyArgs: Map<K, TimeoutMapKeyArgs<K, V>> = new Map();

  private readonly _options: TimeoutMapOptions<K, V> = {};

  constructor(entries?: readonly (readonly [K, V])[] | null, options?: TimeoutMapOptions<K, V>) {
    super(entries);
    if (options) {
      this._options = {
        passiveDeletion: true,
        clearUpPriority: 'filo',
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

  keys(): IterableIterator<K> {
    this._cleanOverLimitElement();
    return super.keys();
  }

  values(): IterableIterator<V> {
    this._cleanOverLimitElement();
    return super.values();
  }

  entries(): IterableIterator<[K, V]> {
    this._cleanOverLimitElement();
    return super.entries();
  }

  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any) {
    this._cleanOverLimitElement();
    return super.forEach(callbackfn, thisArg);
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
        timerId: prefSetTimeout(() => {
          _options?.onTimeout?.(key, super.get(key)!, this._keyArgs.get(key)!, this);
          this.delete(key);
        }, _options.timeout),
      });
    }
  };

  private _clearTimeout(key: K): boolean {
    const arg = this._keyArgs.get(key);
    if (arg?.timerId !== undefined) {
      this._keyArgs.delete(key);
      clearPrefTimeout(arg!.timerId!);
      return true;
    }
    return false;
  }

  private _cleanExpirationElement() {
    for (const [key, arg] of this._keyArgs) {
      if (arg.expirationTime && arg.expirationTime < Date.now().valueOf()) {
        arg.options?.onTimeout?.(key, super.get(key)!, this._keyArgs.get(key)!, this);
        this._keyArgs.delete(key);
        this.delete(key);
      }
    }
  }

  private _cleanOverLimitElement() {
    if (this._options.maxLength !== undefined && super.size > this._options.maxLength) {
      const invalidKeys: K[] = [];
      const sortKeys = () =>
        [...super.keys()].sort(
          (a, b) =>
            (this._keyArgs.get(a)?.expirationTime || 0) -
            (this._keyArgs.get(b)?.expirationTime || 0),
        );
      switch (this._options.clearUpPriority) {
        case 'filo':
          invalidKeys.push(...[...super.keys()].slice(this._options.maxLength, super.size));
          break;
        case 'fifo':
          invalidKeys.push(...[...super.keys()].slice(0, super.size - this._options.maxLength));
          break;
        case 'longPeriod':
          invalidKeys.push(...sortKeys().slice(this._options.maxLength, super.size));
          break;
        case 'shortPeriod':
          invalidKeys.push(...sortKeys().slice(0, super.size - this._options.maxLength));
          break;
      }
      invalidKeys.forEach((key) => {
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
