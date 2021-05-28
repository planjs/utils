type Callback1<T1> = (arg1: T1) => any;
type Callback2<T1, T2> = (arg1: T1, arg2: T2) => any;
type Callback3<T1, T2, T3> = (arg1: T1, arg2: T2, arg3: T3) => any;
type Callback4<T1, T2, T3, T4> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => any;
type Callback5<T1, T2, T3, T4, T5> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => any;
type Callback6Rest<T1, T2, T3, T4, T5, T6> = (
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
  ...rest: any[]
) => any;

class Event {
  private callbacks: Record<string, unknown> = {};
  static eventSplitter = /\s+/;

  constructor(opts?: { callbacks: Record<string, unknown> }) {
    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  on<T>(event: string, callback: Callback1<T>, context?: any): this;
  on<T1, T2>(event: string, callback: Callback2<T1, T2>, context?: any): this;
  on<T1, T2, T3>(event: string, callback: Callback3<T1, T2, T3>, context?: any): this;
  on<T1, T2, T3, T4>(event: string, callback: Callback4<T1, T2, T3, T4>, context?: any): this;
  on<T1, T2, T3, T4, T5>(
    event: string,
    callback: Callback5<T1, T2, T3, T4, T5>,
    context?: any,
  ): this;

  on<T1, T2, T3, T4, T5, T6>(
    event: string,
    callback: Callback6Rest<T1, T2, T3, T4, T5, T6>,
    context?: any,
  ): this;

  on(eventName, callback, context?): this {
    let event, node, tail, list;
    if (!callback) {
      return this;
    }
    eventName = eventName.split(Event.eventSplitter);
    const calls = this.callbacks;
    while ((event = eventName.shift())) {
      list = calls[event];
      node = list ? list.tail : {};
      node.next = tail = {};
      node.context = context;
      node.callback = callback;
      calls[event] = {
        tail,
        next: list ? list.next : node,
      };
    }
    return this;
  }

  once(events, callback, context?): this {
    const wrapper = (...args: any[]) => {
      callback.apply(this, args);
      this.off(events, wrapper, context);
    };
    this.on(events, wrapper, context);
    return this;
  }

  /**
   * 如果什么都不传就off全部事件
   * @param events
   * @param callback
   * @param context
   */
  off(events?, callback?, context?): this {
    let event, calls, node, tail, cb, ctx;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (!(events || callback || context)) {
      this.callbacks = {};
      return this;
    }
    events = events ? events.split(Event.eventSplitter) : Object.keys(calls);
    while ((event = events.shift())) {
      node = calls[event];
      delete calls[event];
      if (!node || !(callback || context)) {
        continue;
      }
      tail = node.tail;
      while ((node = node.next) !== tail) {
        cb = node.callback;
        ctx = node.context;
        if ((callback && cb !== callback) || (context && ctx !== context)) {
          this.on(event, cb, ctx);
        }
      }
    }
    return this;
  }

  trigger(event: string): this;
  trigger<T1>(event: string, arg: T1): this;
  trigger<T1, T2>(event: string, arg1: T1, arg2: T2): this;
  trigger<T1, T2, T3>(event: string, arg1: T1, arg2: T2, arg3: T3): this;
  trigger<T1, T2, T3, T4>(event: string, arg1: T1, arg2: T2, arg3: T3, arg4: T4): this;
  trigger<T1, T2, T3, T4, T5>(
    event: string,
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
  ): this;

  trigger<T1, T2, T3, T4, T5, T6>(
    event: string,
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
    ...rest: any[]
  ): this;

  trigger(events): this {
    let event, node, calls, tail;
    if (!(calls = this.callbacks)) {
      return this;
    }
    events = events.split(Event.eventSplitter);
    // eslint-disable-next-line prefer-rest-params
    const rest = [].slice.call(arguments, 1);
    while ((event = events.shift())) {
      if ((node = calls[event])) {
        tail = node.tail;
        while ((node = node.next) !== tail) {
          node.callback.apply(node.context || this, rest);
        }
      }
    }
    return this;
  }
}

export default Event;
