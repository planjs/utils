import global from '../global';

type Options = {
  method?: string;
  headers?: Record<string, string>;
  credentials?: 'include' | 'omit';
  body?: Parameters<XMLHttpRequest['send']>[0];
};

type Response = {
  ok: boolean;
  statusText: string;
  status: number;
  url: string;
  text: () => Promise<string>;
  json: () => Promise<any>;
  blob: () => Promise<Blob>;
  clone: () => Response;
  headers: {
    keys: () => string[];
    entries: () => [string, string][];
    get: (key: string) => string | undefined;
    has: (key: string) => boolean;
  };
};

/**
 * 具有兼容性的fetch
 * @param url
 * @param options
 * @category Bom
 */
function myFetch(url: string, options: Options = {}) {
  return new Promise<Response>((resolve, reject) => {
    const request = new XMLHttpRequest();
    const keys: string[] = [];
    const all: [string, string][] = [];
    const headers = {};

    const response = (): Response => ({
      ok: ((request.status / 100) | 0) === 2,
      statusText: request.statusText,
      status: request.status,
      url: request.responseURL,
      text: () => Promise.resolve(request.responseText),
      json: () => Promise.resolve(request.responseText).then(JSON.parse),
      blob: () => Promise.resolve(new Blob([request.response])),
      clone: response,
      headers: {
        keys: () => keys,
        entries: () => all,
        get: (n) => headers[n.toLowerCase()],
        has: (n) => n.toLowerCase() in headers,
      },
    });

    request.open(options.method || 'get', url, true);

    request.onload = () => {
      request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (m, key, value) => {
        keys.push((key = key.toLowerCase()));
        all.push([key, value]);
        headers[key] = headers[key] ? `${headers[key]},${value}` : value;

        return m;
      });

      resolve(response());
    };

    request.onerror = reject;

    request.ontimeout = reject;

    request.withCredentials = options.credentials === 'include';

    for (const i in options.headers) {
      request.setRequestHeader(i, options.headers[i]);
    }

    request.send(options.body || null);
  });
}

export default myFetch;

/**
 * 全局增加fetch polyfill
 */
export function shim() {
  if (!global.fetch) global.fetch = myFetch;
}
