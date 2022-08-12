export interface PromiseFN<T = any> {
  (): Promise<T>;
}

export interface AnyPromiseFN<A = any, T = any> {
  (arg?: A): Promise<T>;
}

export interface BaseRetryOption {
  /**
   * 最大等待次数
   * 不设置则一直运行
   */
  maxAttempts?: number;
  /**
   * 重试间隔
   */
  delayMs?: number | ((attempts: number) => number);
}
