export type PromiseFN = () => Promise<any>;

export interface BaseRetryOpts {
  /**
   * 最大等待次数
   * 不设置则一直运行
   */
  maxAttempts?: number;
  /**
   * 重试间隔
   */
  delayMs?: number;
}
