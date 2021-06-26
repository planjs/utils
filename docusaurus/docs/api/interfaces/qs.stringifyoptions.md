---
id: "qs.stringifyoptions"
title: "Interface: StringifyOptions"
sidebar_label: "StringifyOptions"
custom_edit_url: null
---

[qs](../modules/qs.md).StringifyOptions

## Properties

### arrayFormat

• `Optional` `Readonly` **arrayFormat**: ``"bracket"`` \| ``"index"`` \| ``"comma"`` \| ``"separator"`` \| ``"bracket-separator"`` \| ``"none"``

**`default`** 'none'

- `bracket`: Serialize arrays using bracket representation:

```
import queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket'});
//=> 'foo[]=1&foo[]=2&foo[]=3'
```

- `index`: Serialize arrays using index representation:

```
import queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'index'});
//=> 'foo[0]=1&foo[1]=2&foo[2]=3'
```

- `comma`: Serialize arrays by separating elements with comma:

```
import queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'comma'});
//=> 'foo=1,2,3'

queryString.stringify({foo: [1, null, '']}, {arrayFormat: 'comma'});
//=> 'foo=1,,'
// Note that typing information for null values is lost
// and `.parse('foo=1,,')` would return `{foo: [1, '', '']}`.
```

- `separator`: Serialize arrays by separating elements with character:

```
import queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'separator', arrayFormatSeparator: '|'});
//=> 'foo=1|2|3'
```

- `bracket-separator`: Serialize arrays by explicitly post-fixing array names with brackets and separating elements with a custom character:

```
import queryString = require('query-string');

queryString.stringify({foo: []}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]'

queryString.stringify({foo: ['']}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]='

queryString.stringify({foo: [1]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]=1'

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]=1|2|3'

queryString.stringify({foo: [1, '', 3, null, null, 6]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]=1||3|||6'

queryString.stringify({foo: [1, '', 3, null, null, 6]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|', skipNull: true});
//=> 'foo[]=1||3|6'

queryString.stringify({foo: [1, 2, 3], bar: 'fluffy', baz: [4]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> 'foo[]=1|2|3&bar=fluffy&baz[]=4'
```

- `none`: Serialize arrays by using duplicate keys:

```
import queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]});
//=> 'foo=1&foo=2&foo=3'
```

#### Defined in

node_modules/query-string/index.d.ts:308

___

### arrayFormatSeparator

• `Optional` `Readonly` **arrayFormatSeparator**: `string`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

**`default`** ,

#### Defined in

node_modules/query-string/index.d.ts:315

___

### encode

• `Optional` `Readonly` **encode**: `boolean`

[URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.

**`default`** true

#### Defined in

node_modules/query-string/index.d.ts:226

___

### skipEmptyString

• `Optional` `Readonly` **skipEmptyString**: `boolean`

Skip keys with an empty string as the value.

**`default`** false

**`example`**
```
import queryString = require('query-string');

queryString.stringify({a: 1, b: '', c: '', d: 4}, {
skipEmptyString: true
});
//=> 'a=1&d=4'
```

**`example`**
```
import queryString = require('query-string');

queryString.stringify({a: '', b: ''}, {
skipEmptyString: true
});
//=> ''
```

#### Defined in

node_modules/query-string/index.d.ts:395

___

### skipNull

• `Optional` `Readonly` **skipNull**: `boolean`

Skip keys with `null` as the value.

Note that keys with `undefined` as the value are always skipped.

**`default`** false

**`example`**
```
import queryString = require('query-string');

queryString.stringify({a: 1, b: undefined, c: null, d: 4}, {
skipNull: true
});
//=> 'a=1&d=4'

queryString.stringify({a: undefined, b: null}, {
skipNull: true
});
//=> ''
```

#### Defined in

node_modules/query-string/index.d.ts:368

___

### sort

• `Optional` `Readonly` **sort**: ``false`` \| (`itemLeft`: `string`, `itemRight`: `string`) => `number`

Supports both `Function` as a custom sorting function or `false` to disable sorting.

If omitted, keys are sorted using `Array#sort`, which means, converting them to strings and comparing strings in Unicode code point order.

**`default`** true

**`example`**
```
import queryString = require('query-string');

const order = ['c', 'a', 'b'];

queryString.stringify({a: 1, b: 2, c: 3}, {
sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
});
//=> 'c=3&a=1&b=2'
```

**`example`**
```
import queryString = require('query-string');

queryString.stringify({b: 1, c: 2, a: 3}, {sort: false});
//=> 'b=1&c=2&a=3'
```

#### Defined in

node_modules/query-string/index.d.ts:344

___

### strict

• `Optional` `Readonly` **strict**: `boolean`

Strictly encode URI components with [`strict-uri-encode`](https://github.com/kevva/strict-uri-encode). It uses [`encodeURIComponent`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to `false`. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.

**`default`** true

#### Defined in

node_modules/query-string/index.d.ts:219
