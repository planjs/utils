import { parse, stringify, ParsedQuery, ParseOptions, StringifyOptions } from 'query-string';

export interface OauthClientOptions<K extends string> {
  /**
   * url
   * @default window.location.href
   */
  url?: URL | string;
  /**
   * 回调参数
   * eg： wx code,state
   */
  consumerKeys: K[];
  /**
   * 参数是放hash还是history
   * 如果没有传递，则都会判断
   */
  mode?: 'hash' | 'history';
  /**
   * query-string parse 格式化参数
   */
  qsParseArgs?: ParseOptions;
  /**
   * query-string stringify 格式化参数
   */
  qsStringifyArgs?: StringifyOptions;
}

type ParamsObject<K extends string> = Record<K, string>;

/**
 * oauth授权回调页面参数处理
 * 浏览器端才能用
 */
class OauthClient<K extends string = 'code' | 'state'> {
  consumerKeys: K[];
  mode?: OauthClientOptions<K>['mode'];
  url!: URL;

  private readonly _qsParseArgs: ParseOptions;
  private readonly _qsStringifyArgs: StringifyOptions;

  constructor({
    consumerKeys,
    mode,
    url = window.location.href,
    qsParseArgs,
    qsStringifyArgs,
  }: OauthClientOptions<K>) {
    this.consumerKeys = consumerKeys;
    this.mode = mode;
    this.setUrl(url);
    this._qsParseArgs = qsParseArgs || {};
    this._qsStringifyArgs = qsStringifyArgs || {};
  }

  private _stringify(obj) {
    return stringify(obj, this._qsStringifyArgs);
  }

  private _parse(str) {
    return parse(str, this._qsParseArgs);
  }

  get isHashMode() {
    return this.mode === 'hash';
  }

  get isHistoryMode() {
    return this.mode === 'history';
  }

  get hashQuery() {
    return this._parse(this.url.hash.split('?').pop() || '') || {};
  }

  get searchQuery() {
    return this._parse(this.url.search);
  }

  /**
   * 当前url query参数 url query / hash query
   * 如果没有传则处理左右参数
   */
  get query(): ParsedQuery {
    return {
      ...(this.isHashMode || !this.mode ? this.hashQuery : {}),
      ...(this.isHistoryMode || !this.mode ? this.searchQuery : {}),
    };
  }

  /**
   * 获取掉oauth参数的，返回新的对象
   * @param obj
   */
  filterConsumerKeys(obj: ParsedQuery): Omit<ParsedQuery, K> {
    return Object.keys(obj)
      .filter((v) => !this.consumerKeys.includes(v as K))
      .reduce((acc, k) => {
        acc[k] = obj[k];
        return acc;
      }, {} as Omit<ParsedQuery, K>);
  }

  /**
   * 去除掉 oauth consumerKeys 参数
   */
  get originalUrl(): string {
    return this.getOriginalUrl(this.url);
  }

  /**
   * 传入自定义的地址，过滤参数
   * @param uri
   */
  getOriginalUrl(uri: string | URL): string {
    const url = uri instanceof URL ? uri : new URL(uri);
    const t = new URL(url.href);
    const hashQuery = this._parse(url.hash.split('?')?.[1] || '') || {};
    const searchQuery = this._parse(url.search);
    if (!this.mode || this.isHashMode) {
      const s = this._stringify(this.filterConsumerKeys(hashQuery));
      t.hash = url.hash.split('?')[0] || '';
      if (s) t.hash += '?' + s;
    }
    if (!this.mode || this.isHistoryMode) {
      const s = this._stringify(this.filterConsumerKeys(searchQuery));
      t.search = '?' + s;
    }
    return t.href;
  }

  private get hasAuthParams() {
    return this.consumerKeys.every((v) => !!this.query[v]);
  }

  /**
   * 设置要处理参数的url
   * @param url
   */
  setUrl(url: URL | string): this {
    if (url instanceof URL) {
      this.url = url;
    } else {
      this.url = new URL(url);
    }
    return this;
  }

  /**
   * 获取授权参数
   * @return 返回oauth回调参数
   */
  getAuthParams(): ParamsObject<K> | undefined {
    if (this.hasAuthParams) {
      return this.consumerKeys.reduce((acc, k) => {
        acc[k] = this.query[k] as string;
        return acc;
      }, {} as ParamsObject<K>);
    }
  }
}

export default OauthClient;
