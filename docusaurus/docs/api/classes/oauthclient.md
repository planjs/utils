---
id: "oauthclient"
title: "Class: OauthClient<K>"
sidebar_label: "OauthClient"
sidebar_position: 0
custom_edit_url: null
---

oauth授权回调页面参数处理
浏览器端才能用

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string```"code"`` \| ``"state"`` |

## Constructors

### constructor

• **new OauthClient**<`K`\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string```"code"`` \| ``"state"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`OauthClientOption`](../interfaces/oauthclientoption.md)<`K`\> |

#### Defined in

[src/things/oauth-client.ts:43](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L43)

## Properties

### \_qsParseArgs

• `Private` `Readonly` **\_qsParseArgs**: [`ParseOptions`](../interfaces/qs.parseoptions.md)

#### Defined in

[src/things/oauth-client.ts:42](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L42)

___

### \_qsStringifyArgs

• `Private` `Readonly` **\_qsStringifyArgs**: [`StringifyOptions`](../interfaces/qs.stringifyoptions.md)

#### Defined in

[src/things/oauth-client.ts:43](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L43)

___

### consumerKeys

• **consumerKeys**: `K`[]

#### Defined in

[src/things/oauth-client.ts:38](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L38)

___

### mode

• `Optional` **mode**: ``"hash"`` \| ``"history"``

#### Defined in

[src/things/oauth-client.ts:39](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L39)

___

### url

• **url**: `URL`

#### Defined in

[src/things/oauth-client.ts:40](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L40)

## Accessors

### hasAuthParams

• `Private` `get` **hasAuthParams**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:135](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L135)

___

### hashQuery

• `get` **hashQuery**(): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Defined in

[src/things/oauth-client.ts:75](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L75)

___

### isHashMode

• `get` **isHashMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:67](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L67)

___

### isHistoryMode

• `get` **isHistoryMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:71](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L71)

___

### originalUrl

• `get` **originalUrl**(): `string`

去除掉 oauth consumerKeys 参数

#### Returns

`string`

#### Defined in

[src/things/oauth-client.ts:110](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L110)

___

### query

• `get` **query**(): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

当前url query参数 url query / hash query
如果没有传则处理左右参数

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Defined in

[src/things/oauth-client.ts:87](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L87)

___

### searchQuery

• `get` **searchQuery**(): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Defined in

[src/things/oauth-client.ts:79](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L79)

## Methods

### \_parse

▸ `Private` **_parse**(`str`): [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>

#### Defined in

[src/things/oauth-client.ts:63](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L63)

___

### \_stringify

▸ `Private` **_stringify**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[src/things/oauth-client.ts:59](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L59)

___

### filterConsumerKeys

▸ **filterConsumerKeys**(`obj`): `Omit`<[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>, `K`\>

获取掉oauth参数的，返回新的对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\> |

#### Returns

`Omit`<[`ParsedQuery`](../interfaces/qs.parsedquery.md)<`string`\>, `K`\>

#### Defined in

[src/things/oauth-client.ts:98](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L98)

___

### getAuthParams

▸ **getAuthParams**(): `undefined` \| `ParamsObject`<`K`\>

获取授权参数

#### Returns

`undefined` \| `ParamsObject`<`K`\>

返回oauth回调参数

#### Defined in

[src/things/oauth-client.ts:156](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L156)

___

### getOriginalUrl

▸ **getOriginalUrl**(`uri`): `string`

传入自定义的地址，过滤参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` \| `URL` |

#### Returns

`string`

#### Defined in

[src/things/oauth-client.ts:118](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L118)

___

### setUrl

▸ **setUrl**(`url`): [`OauthClient`](oauthclient.md)<`K`\>

设置要处理参数的url

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |

#### Returns

[`OauthClient`](oauthclient.md)<`K`\>

#### Defined in

[src/things/oauth-client.ts:143](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L143)
