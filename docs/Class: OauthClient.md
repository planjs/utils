oauth授权回调页面参数处理
浏览器端才能用

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: `string` = ``"code"`` \| ``"state"`` |

## Table of contents

### Constructors

- [constructor](../wiki/Class:%20OauthClient#constructor)

### Properties

- [\_qsParseArgs](../wiki/Class:%20OauthClient#_qsparseargs)
- [\_qsStringifyArgs](../wiki/Class:%20OauthClient#_qsstringifyargs)
- [consumerKeys](../wiki/Class:%20OauthClient#consumerkeys)
- [mode](../wiki/Class:%20OauthClient#mode)
- [url](../wiki/Class:%20OauthClient#url)

### Accessors

- [hasAuthParams](../wiki/Class:%20OauthClient#hasauthparams)
- [hashQuery](../wiki/Class:%20OauthClient#hashquery)
- [isHashMode](../wiki/Class:%20OauthClient#ishashmode)
- [isHistoryMode](../wiki/Class:%20OauthClient#ishistorymode)
- [originalUrl](../wiki/Class:%20OauthClient#originalurl)
- [query](../wiki/Class:%20OauthClient#query)
- [searchQuery](../wiki/Class:%20OauthClient#searchquery)

### Methods

- [\_parse](../wiki/Class:%20OauthClient#_parse)
- [\_stringify](../wiki/Class:%20OauthClient#_stringify)
- [filterConsumerKeys](../wiki/Class:%20OauthClient#filterconsumerkeys)
- [getAuthParams](../wiki/Class:%20OauthClient#getauthparams)
- [getOriginalUrl](../wiki/Class:%20OauthClient#getoriginalurl)
- [setUrl](../wiki/Class:%20OauthClient#seturl)

## Constructors

### constructor

• **new OauthClient**<K\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: `string` = ``"code"`` \| ``"state"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [OauthClientOption](../wiki/Interface:%20OauthClientOption)<K\> |

#### Defined in

[src/things/oauth-client.ts:42](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L42)

## Properties

### \_qsParseArgs

• `Private` `Readonly` **\_qsParseArgs**: `ParseOptions`

#### Defined in

[src/things/oauth-client.ts:41](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L41)

___

### \_qsStringifyArgs

• `Private` `Readonly` **\_qsStringifyArgs**: `StringifyOptions`

#### Defined in

[src/things/oauth-client.ts:42](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L42)

___

### consumerKeys

• **consumerKeys**: `K`[]

#### Defined in

[src/things/oauth-client.ts:37](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L37)

___

### mode

• `Optional` **mode**: ``"hash"`` \| ``"history"``

#### Defined in

[src/things/oauth-client.ts:38](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L38)

___

### url

• **url**: `URL`

#### Defined in

[src/things/oauth-client.ts:39](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L39)

## Accessors

### hasAuthParams

• `Private` `get` **hasAuthParams**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:134](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L134)

___

### hashQuery

• `get` **hashQuery**(): `ParsedQuery`<string\>

#### Returns

`ParsedQuery`<string\>

#### Defined in

[src/things/oauth-client.ts:74](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L74)

___

### isHashMode

• `get` **isHashMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:66](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L66)

___

### isHistoryMode

• `get` **isHistoryMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/things/oauth-client.ts:70](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L70)

___

### originalUrl

• `get` **originalUrl**(): `string`

去除掉 oauth consumerKeys 参数

#### Returns

`string`

#### Defined in

[src/things/oauth-client.ts:109](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L109)

___

### query

• `get` **query**(): `ParsedQuery`<string\>

当前url query参数 url query / hash query
如果没有传则处理左右参数

#### Returns

`ParsedQuery`<string\>

#### Defined in

[src/things/oauth-client.ts:86](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L86)

___

### searchQuery

• `get` **searchQuery**(): `ParsedQuery`<string\>

#### Returns

`ParsedQuery`<string\>

#### Defined in

[src/things/oauth-client.ts:78](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L78)

## Methods

### \_parse

▸ `Private` **_parse**(`str`): `ParsedQuery`<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`ParsedQuery`<string\>

#### Defined in

[src/things/oauth-client.ts:62](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L62)

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

[src/things/oauth-client.ts:58](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L58)

___

### filterConsumerKeys

▸ **filterConsumerKeys**(`obj`): `Omit`<ParsedQuery<string\>, K\>

获取掉oauth参数的，返回新的对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `ParsedQuery`<string\> |

#### Returns

`Omit`<ParsedQuery<string\>, K\>

#### Defined in

[src/things/oauth-client.ts:97](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L97)

___

### getAuthParams

▸ **getAuthParams**(): `undefined` \| `ParamsObject`<K\>

获取授权参数

#### Returns

`undefined` \| `ParamsObject`<K\>

返回oauth回调参数

#### Defined in

[src/things/oauth-client.ts:155](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L155)

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

[src/things/oauth-client.ts:117](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L117)

___

### setUrl

▸ **setUrl**(`url`): [OauthClient](../wiki/Class:%20OauthClient)<K\>

设置要处理参数的url

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |

#### Returns

[OauthClient](../wiki/Class:%20OauthClient)<K\>

#### Defined in

[src/things/oauth-client.ts:142](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L142)
