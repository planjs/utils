# utils

> Common tools collection

## Installation

```bash
npm i @planjs/utils
```

## Usage

[DOC](./docs/README.md)

```javascript
import { delay, retry } from '@planjs/utils';

async function init() {
  await delay(100);
  function fetchData() {
    return Promise.reject(new Error('testing'));
  }
  await retry(fetchData, { maxAttempts: 3, delayMs: 500 })();
}

init();
```

