# utils

![npm](https://img.shields.io/npm/v/@planjs/utils?label=@planjs/utils) ![npm](https://packagephobia.now.sh/badge?p=@planjs/utils) <br/> [![NPM](https://nodei.co/npm/@planjs/utils.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/@planjs/utils)

> Common tools collection [doc](https://planjs.github.io/utils/)

## Installation

```bash
npm i @planjs/utils
```

## Usage

```javascript
import {
  delay,
  retry,
  pTry,
  sequenceChain,
  nextTick,
  range,
  REG_TEL_PHONE,
  eventCenter,
  TimeoutMap,
} from '@planjs/utils';

// promise utils
async function main() {
  await delay(100);
  function fetchData() {
    return Promise.reject(new Error('testing'));
  }
  await retry(fetchData, { maxAttempts: 3, delayMs: 500 })();
}

const pool = asyncPool({ maxConcurrency: 10 });

const randArr = range(1, 10);

nextTick(async () => {
  const [err, res] = await pTry(main());
  if (!err) {
    console.log(res);
  }
  let start = Date.now();
  await Promise.all(randArr.map((v) => pool.executor(delay(v))));
  // The timer has an accuracy problem
  if (Date.now() - start + 1 >= Math.max(...randArr)) {
    console.log('concurrency');
  }
  const count = (a = 0) => ++a;
  const val = await sequenceChain([...range(0, 10).map((v) => [count])])();
  console.log(val); // 11
});

// commonly used regex
REG_TEL_PHONE.test('132xxxxxxx'); // false

// event center
eventCenter.on('log', console.log);
eventCenter.trigger('log', 'planjs');

// ext obj
const timeoutMap = new TimeoutMap({
  timeout: 200,
  passiveDeletion: true,
  onTimeout(k, v) {
    console.log(`expired key [${k}], val [${v}]`);
  },
});
timeoutMap.set('name', 'fupengl');
delay(201).then(() => timeoutMap.get('name')); // null
```
