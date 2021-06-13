## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<K, V\>

  ↳ **TimeoutMap**

## Table of contents

### Constructors

- [constructor](../wiki/Class:%20TimeoutMap#constructor)

### Properties

- [[Symbol.toStringTag]](../wiki/Class:%20TimeoutMap#%5Bsymbol.tostringtag%5D)
- [\_keyArgs](../wiki/Class:%20TimeoutMap#_keyargs)
- [\_options](../wiki/Class:%20TimeoutMap#_options)
- [size](../wiki/Class:%20TimeoutMap#size)
- [[Symbol.species]](../wiki/Class:%20TimeoutMap#%5Bsymbol.species%5D)

### Methods

- [[Symbol.iterator]](../wiki/Class:%20TimeoutMap#%5Bsymbol.iterator%5D)
- [\_cleanExpirationElement](../wiki/Class:%20TimeoutMap#_cleanexpirationelement)
- [\_cleanOverLimitElement](../wiki/Class:%20TimeoutMap#_cleanoverlimitelement)
- [\_clearTimeout](../wiki/Class:%20TimeoutMap#_cleartimeout)
- [\_mergeOptions](../wiki/Class:%20TimeoutMap#_mergeoptions)
- [\_setKeyArgs](../wiki/Class:%20TimeoutMap#_setkeyargs)
- [\_setTimeout](../wiki/Class:%20TimeoutMap#_settimeout)
- [clear](../wiki/Class:%20TimeoutMap#clear)
- [delete](../wiki/Class:%20TimeoutMap#delete)
- [entries](../wiki/Class:%20TimeoutMap#entries)
- [forEach](../wiki/Class:%20TimeoutMap#foreach)
- [get](../wiki/Class:%20TimeoutMap#get)
- [has](../wiki/Class:%20TimeoutMap#has)
- [keys](../wiki/Class:%20TimeoutMap#keys)
- [set](../wiki/Class:%20TimeoutMap#set)
- [values](../wiki/Class:%20TimeoutMap#values)

## Constructors

### constructor

• **new TimeoutMap**<K, V\>(`entries?`, `options?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |
| `options?` | `TimeoutMapOptions`<K, V\> |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/object/timeout-map.ts:42](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L42)

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### \_keyArgs

• `Private` `Readonly` **\_keyArgs**: `Map`<K, TimeoutMapKeyArgs<K, V\>\>

#### Defined in

[src/object/timeout-map.ts:40](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L40)

___

### \_options

• `Private` `Readonly` **\_options**: `TimeoutMapOptions`<K, V\> = {}

#### Defined in

[src/object/timeout-map.ts:42](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L42)

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

[src/object/timeout-map.ts:153](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L153)

___

### \_cleanOverLimitElement

▸ `Private` **_cleanOverLimitElement**(): `void`

#### Returns

`void`

#### Defined in

[src/object/timeout-map.ts:163](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L163)

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

[src/object/timeout-map.ts:143](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L143)

___

### \_mergeOptions

▸ `Private` **_mergeOptions**(`options?`): `TimeoutMapOptions`<K, V\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<TimeoutMapOptions<K, V\>\> |

#### Returns

`TimeoutMapOptions`<K, V\>

#### Defined in

[src/object/timeout-map.ts:109](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L109)

___

### \_setKeyArgs

▸ `Private` **_setKeyArgs**(`k`, `args`): `TimeoutMapKeyArgs`<K, V\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `K` |
| `args` | `Partial`<TimeoutMapKeyArgs<K, V\>\> |

#### Returns

`TimeoutMapKeyArgs`<K, V\>

#### Defined in

[src/object/timeout-map.ts:116](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L116)

___

### \_setTimeout

▸ `Private` **_setTimeout**(`key`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `options?` | `TimeoutMapOptions`<K, V\> |

#### Returns

`void`

#### Defined in

[src/object/timeout-map.ts:123](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L123)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/object/timeout-map.ts:101](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L101)

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

[src/object/timeout-map.ts:95](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L95)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Overrides

Map.entries

#### Defined in

[src/object/timeout-map.ts:74](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L74)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<K, V\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Overrides

Map.forEach

#### Defined in

[src/object/timeout-map.ts:79](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L79)

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

[src/object/timeout-map.ts:54](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L54)

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

[src/object/timeout-map.ts:59](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L59)

___

### keys

▸ **keys**(): `IterableIterator`<K\>

#### Returns

`IterableIterator`<K\>

#### Overrides

Map.keys

#### Defined in

[src/object/timeout-map.ts:64](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L64)

___

### set

▸ **set**(`key`, `value`, `options?`): [TimeoutMap](../wiki/Class:%20TimeoutMap)<K, V\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |
| `options?` | `Omit`<TimeoutMapOptions<K, V\>, ``"maxLength"``\> |

#### Returns

[TimeoutMap](../wiki/Class:%20TimeoutMap)<K, V\>

#### Overrides

Map.set

#### Defined in

[src/object/timeout-map.ts:84](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L84)

___

### values

▸ **values**(): `IterableIterator`<V\>

#### Returns

`IterableIterator`<V\>

#### Overrides

Map.values

#### Defined in

[src/object/timeout-map.ts:69](https://github.com/planjs/utils/blob/f16b9fd/src/object/timeout-map.ts#L69)
