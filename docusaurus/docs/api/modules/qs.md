---
id: "qs"
title: "Namespace: qs"
sidebar_label: "qs"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ParseOptions](../interfaces/qs.parseoptions.md)
- [ParsedQuery](../interfaces/qs.parsedquery.md)
- [ParsedUrl](../interfaces/qs.parsedurl.md)
- [StringifyOptions](../interfaces/qs.stringifyoptions.md)
- [UrlObject](../interfaces/qs.urlobject.md)

## Type aliases

### Stringifiable

Ƭ **Stringifiable**: `string` \| `boolean` \| `number` \| ``null`` \| `undefined`

#### Defined in

node_modules/query-string/index.d.ts:398

___

### StringifiableRecord

Ƭ **StringifiableRecord**: `Record`<`string`, [`Stringifiable`](qs.md#stringifiable) \| readonly [`Stringifiable`](qs.md#stringifiable)[]\>

#### Defined in

node_modules/query-string/index.d.ts:400

## Functions

### exclude

▸ **exclude**(`url`, `keys`, `options?`): `string`

Exclude query parameters from a URL. Like `.pick()` but reversed.

**`example`**
```
queryString.exclude('https://foo.bar?foo=1&bar=2#hello', ['foo']);
//=> 'https://foo.bar?bar=2#hello'

queryString.exclude('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true});
//=> 'https://foo.bar?foo=1#hello'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL containing the query parameters to exclude. |
| `keys` | readonly `string`[] | The names of the query parameters to remove. All other query parameters will remain in the URL. |
| `options?` | [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) | - |

#### Returns

`string`

The URL without the excluded the query parameters.

#### Defined in

node_modules/query-string/index.d.ts:526

▸ **exclude**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `boolean` \| `number`) => `boolean` |
| `options?` | { `parseBooleans`: ``true`` ; `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:531

▸ **exclude**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `boolean`) => `boolean` |
| `options?` | { `parseBooleans`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:536

▸ **exclude**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `number`) => `boolean` |
| `options?` | { `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:541

___

### extract

▸ **extract**(`url`): `string`

Extract a query string from a URL that can be passed into `.parse()`.

Note: This behaviour can be changed with the `skipNull` option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:423

___

### parse

▸ **parse**(`query`, `options`): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `boolean` \| `number`\>

Parse a query string into an object. Leading `?` or `#` are ignored, so you can pass `location.search` or `location.hash` directly.

The returned object is created with [`Object.create(null)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and thus does not have a `prototype`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query string to parse. |
| `options` | { `parseBooleans`: ``true`` ; `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) | - |

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `boolean` \| `number`\>

#### Defined in

node_modules/query-string/index.d.ts:176

▸ **parse**(`query`, `options`): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options` | { `parseBooleans`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) |

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `boolean`\>

#### Defined in

node_modules/query-string/index.d.ts:177

▸ **parse**(`query`, `options`): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options` | { `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) |

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string` \| `number`\>

#### Defined in

node_modules/query-string/index.d.ts:178

▸ **parse**(`query`, `options?`): [`ParsedQuery`](../interfaces/qs.parsedquery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options?` | [`ParseOptions`](../interfaces/qs.parseoptions.md) |

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)

#### Defined in

node_modules/query-string/index.d.ts:179

___

### parseUrl

▸ **parseUrl**(`url`, `options?`): [`ParsedUrl`](../interfaces/qs.parsedurl.md)

Extract the URL and the query string as an object.

If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.

**`example`**
```
import queryString = require('query-string');

queryString.parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to parse. |
| `options?` | [`ParseOptions`](../interfaces/qs.parseoptions.md) | - |

#### Returns

[`ParsedUrl`](../interfaces/qs.parsedurl.md)

#### Defined in

node_modules/query-string/index.d.ts:211

___

### pick

▸ **pick**(`url`, `keys`, `options?`): `string`

Pick query parameters from a URL.

**`example`**
```
queryString.pick('https://foo.bar?foo=1&bar=2#hello', ['foo']);
//=> 'https://foo.bar?foo=1#hello'

queryString.pick('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true});
//=> 'https://foo.bar?bar=2#hello'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL containing the query parameters to pick. |
| `keys` | readonly `string`[] | The names of the query parameters to keep. All other query parameters will be removed from the URL. |
| `options?` | [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) | - |

#### Returns

`string`

The URL with the picked query parameters.

#### Defined in

node_modules/query-string/index.d.ts:487

▸ **pick**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `boolean` \| `number`) => `boolean` |
| `options?` | { `parseBooleans`: ``true`` ; `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:492

▸ **pick**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `boolean`) => `boolean` |
| `options?` | { `parseBooleans`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:497

▸ **pick**(`url`, `filter`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filter` | (`key`: `string`, `value`: `string` \| `number`) => `boolean` |
| `options?` | { `parseNumbers`: ``true``  } & [`ParseOptions`](../interfaces/qs.parseoptions.md) & [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:502

___

### stringify

▸ **stringify**(`object`, `options?`): `string`

Stringify an object into a query string and sort the keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `any`\> |
| `options?` | [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:408

___

### stringifyUrl

▸ **stringifyUrl**(`object`, `options?`): `string`

Stringify an object into a URL with a query string and sorting the keys. The inverse of [`.parseUrl()`](https://github.com/sindresorhus/query-string#parseurlstring-options)

Query items in the `query` property overrides queries in the `url` property.

The `fragmentIdentifier` property overrides the fragment identifier in the `url` property.

**`example`**
```
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({
url: 'https://foo.bar',
query: {
top: 'foo'
},
fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`UrlObject`](../interfaces/qs.urlobject.md) |
| `options?` | [`StringifyOptions`](../interfaces/qs.stringifyoptions.md) |

#### Returns

`string`

#### Defined in

node_modules/query-string/index.d.ts:464
