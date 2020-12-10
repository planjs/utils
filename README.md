# utils

![npm](https://img.shields.io/npm/v/@planjs/utils?label=@planjs/utils)
![npm](https://packagephobia.now.sh/badge?p=@planjs/utils) <br/>
[![NPM](https://nodei.co/npm/@planjs/utils.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/@planjs/utils)

> Common tools collection [doc](https://planjs.github.io/utils/)

## Installation

```bash
npm i @planjs/utils
```

## Usage

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
