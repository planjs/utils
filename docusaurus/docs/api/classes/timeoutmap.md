---
id: "timeoutmap"
title: "Class: TimeoutMap<K, V>"
sidebar_label: "TimeoutMap"
sidebar_position: 0
custom_edit_url: null
---

Map with set validity period

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`TimeoutMap`**

## Constructors

### constructor

• **new TimeoutMap**<`K`, `V`\>(`entries?`, `options?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |
| `options?` | `TimeoutMapOptions`<`K`, `V`\> |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/object/timeout-map.ts:46](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L46)

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### \_keyArgs

• `Private` `Readonly` **\_keyArgs**: `Map`<`K`, `TimeoutMapKeyArgs`<`K`, `V`\>\>

#### Defined in

[src/object/timeout-map.ts:44](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L44)

___

### \_options

• `Private` `Readonly` **\_options**: `TimeoutMapOptions`<`K`, `V`\> = `{}`

#### Defined in

[src/object/timeout-map.ts:46](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L46)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### \_cleanExpirationElement

▸ `Private` **_cleanExpirationElement**(): `void`

#### Returns

`void`

#### Defined in

[src/object/timeout-map.ts:157](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L157)

___

### \_cleanOverLimitElement

▸ `Private` **_cleanOverLimitElement**(): `void`

#### Returns

`void`

#### Defined in

[src/object/timeout-map.ts:167](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L167)

___

### \_clearTimeout

▸ `Private` **_clearTimeout**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[src/object/timeout-map.ts:147](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L147)

___

### \_mergeOptions

▸ `Private` **_mergeOptions**(`options?`): `TimeoutMapOptions`<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`TimeoutMapOptions`<`K`, `V`\>\> |

#### Returns

`TimeoutMapOptions`<`K`, `V`\>

#### Defined in

[src/object/timeout-map.ts:113](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L113)

___

### \_setKeyArgs

▸ `Private` **_setKeyArgs**(`k`, `args`): `TimeoutMapKeyArgs`<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `K` |
| `args` | `Partial`<`TimeoutMapKeyArgs`<`K`, `V`\>\> |

#### Returns

`TimeoutMapKeyArgs`<`K`, `V`\>

#### Defined in

[src/object/timeout-map.ts:120](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L120)

___

### \_setTimeout

▸ `Private` **_setTimeout**(`key`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `options?` | `TimeoutMapOptions`<`K`, `V`\> |

#### Returns

`void`

#### Defined in

[src/object/timeout-map.ts:127](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L127)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/object/timeout-map.ts:105](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L105)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/object/timeout-map.ts:99](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L99)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Overrides

Map.entries

#### Defined in

[src/object/timeout-map.ts:78](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L78)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Overrides

Map.forEach

#### Defined in

[src/object/timeout-map.ts:83](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L83)

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Overrides

Map.get

#### Defined in

[src/object/timeout-map.ts:58](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L58)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

[src/object/timeout-map.ts:63](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L63)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Overrides

Map.keys

#### Defined in

[src/object/timeout-map.ts:68](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L68)

___

### set

▸ **set**(`key`, `value`, `options?`): [`TimeoutMap`](timeoutmap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |
| `options?` | `Omit`<`TimeoutMapOptions`<`K`, `V`\>, ``"maxLength"``\> |

#### Returns

[`TimeoutMap`](timeoutmap.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[src/object/timeout-map.ts:88](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L88)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Overrides

Map.values

#### Defined in

[src/object/timeout-map.ts:73](https://github.com/planjs/utils/blob/784afab/src/object/timeout-map.ts#L73)
