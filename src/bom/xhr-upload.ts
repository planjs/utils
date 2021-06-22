export type UploadRequestMethod = 'POST' | 'PUT' | 'PATCH' | 'post' | 'put' | 'patch';

export interface UploadProgressEvent extends ProgressEvent {
  /**
   * 上传百分比
   */
  percent: number;
}

export interface UploadRequestHeader {
  [key: string]: string;
}

export interface UploadRequestError extends Error {
  status?: number;
  method?: UploadRequestMethod;
  url?: string;
}

export interface UploadRequestOption<T = any> {
  onProgress?: (event: UploadProgressEvent) => void;
  onError?: (event: UploadRequestError | ProgressEvent, body?: T) => void;
  onSuccess?: (body: T, xhr: XMLHttpRequest) => void;
  onAbort?: (event: UploadRequestError | ProgressEvent) => void;
  data?: object;
  filename?: string;
  file: File;
  withCredentials?: boolean;
  action: string;
  headers?: UploadRequestHeader;
  method: UploadRequestMethod;
}

interface UploadResult {
  abort(): void;
}

function getError(option: UploadRequestOption, xhr: XMLHttpRequest) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg) as UploadRequestError;
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

/**
 * 上传文件
 * @param option
 * @category Bom
 */
export default function upload<T>(option: UploadRequestOption<T>): UploadResult {
  const xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function (e: ProgressEvent) {
      const _e = e as UploadProgressEvent;
      if (_e.total > 0) {
        _e.percent = (_e.loaded / _e.total) * 100;
      }
      option.onProgress!(_e);
    };
  }

  const formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach((key) => {
      const value = option.data![key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, option.data![key]);
    });
  }

  if (option.file instanceof Blob) {
    formData.append(option.filename!, option.file, option.file.name);
  } else {
    formData.append(option.filename!, option.file);
  }

  xhr.onerror = function error(e) {
    option.onError?.(e);
  };

  xhr.onabort = function abort(e) {
    option.onAbort?.(e);
  };

  xhr.ontimeout = function timeout(e) {
    option.onError?.(e);
  };

  xhr.onload = function onload() {
    if (((xhr.status / 100) | 0) !== 2) {
      return option.onError?.(getError(option, xhr), getBody(xhr));
    }

    return option.onSuccess?.(getBody(xhr), xhr);
  };

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  xhr.open(option.method, option.action, true);

  const headers = option.headers || {};
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  Object.keys(headers).forEach((h) => {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });

  xhr.send(formData);

  return {
    abort() {
      xhr.abort();
    },
  };
}
