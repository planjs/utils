---
id: "qs.parseoptions"
title: "Interface: ParseOptions"
sidebar_label: "ParseOptions"
custom_edit_url: null
---

[qs](../modules/qs.md).ParseOptions

## Properties

### arrayFormat

• `Optional` `Readonly` **arrayFormat**: ``"bracket"`` \| ``"index"`` \| ``"comma"`` \| ``"separator"`` \| ``"bracket-separator"`` \| ``"none"``

**`default`** 'none'

- `bracket`: Parse arrays with bracket representation:

```
import queryString = require('query-string');

queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
//=> {foo: ['1', '2', '3']}
```

- `index`: Parse arrays with index representation:

```
import queryString = require('query-string');

queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'});
//=> {foo: ['1', '2', '3']}
```

- `comma`: Parse arrays with elements separated by comma:

```
import queryString = require('query-string');

queryString.parse('foo=1,2,3', {arrayFormat: 'comma'});
//=> {foo: ['1', '2', '3']}
```

- `separator`: Parse arrays with elements separated by a custom character:

```
import queryString = require('query-string');

queryString.parse('foo=1|2|3', {arrayFormat: 'separator', arrayFormatSeparator: '|'});
//=> {foo: ['1', '2', '3']}
```

- `bracket-separator`: Parse arrays (that are explicitly marked with brackets) with elements separated by a custom character:

```
import queryString = require('query-string');

queryString.parse('foo[]', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: []}

queryString.parse('foo[]=', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: ['']}

queryString.parse('foo[]=1', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: ['1']}

queryString.parse('foo[]=1|2|3', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: ['1', '2', '3']}

queryString.parse('foo[]=1||3|||6', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: ['1', '', 3, '', '', '6']}

queryString.parse('foo[]=1|2|3&bar=fluffy&baz[]=4', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
//=> {foo: ['1', '2', '3'], bar: 'fluffy', baz:['4']}
```

- `none`: Parse arrays with elements using duplicate keys:

```
import queryString = require('query-string');

queryString.parse('foo=1&foo=2&foo=3');
//=> {foo: ['1', '2', '3']}
```

#### Defined in

node_modules/query-string/index.d.ts:81

___

### arrayFormatSeparator

• `Optional` `Readonly` **arrayFormatSeparator**: `string`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

**`default`** ,

#### Defined in

node_modules/query-string/index.d.ts:88

___

### decode

• `Optional` `Readonly` **decode**: `boolean`

Decode the keys and values. URI components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).

**`default`** true

#### Defined in

node_modules/query-string/index.d.ts:7

___

### parseBooleans

• `Optional` `Readonly` **parseBooleans**: `boolean`

Parse the value as a boolean type instead of string type if it's a boolean.

**`default`** false

**`example`**
```
import queryString = require('query-string');

queryString.parse('foo=true', {parseBooleans: true});
//=> {foo: true}
```

#### Defined in

node_modules/query-string/index.d.ts:147

___

### parseFragmentIdentifier

• `Optional` `Readonly` **parseFragmentIdentifier**: `boolean`

Parse the fragment identifier from the URL and add it to result object.

**`default`** false

**`example`**
```
import queryString = require('query-string');

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

#### Defined in

node_modules/query-string/index.d.ts:162

___

### parseNumbers

• `Optional` `Readonly` **parseNumbers**: `boolean`

Parse the value as a number type instead of string type if it's a number.

**`default`** false

**`example`**
```
import queryString = require('query-string');

queryString.parse('foo=1', {parseNumbers: true});
//=> {foo: 1}
```

#### Defined in

node_modules/query-string/index.d.ts:132

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

queryString.parse('?a=one&b=two&c=three', {
sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
});
//=> {c: 'three', a: 'one', b: 'two'}
```

**`example`**
```
import queryString = require('query-string');

queryString.parse('?a=one&c=three&b=two', {sort: false});
//=> {a: 'one', c: 'three', b: 'two'}
```

#### Defined in

node_modules/query-string/index.d.ts:117
