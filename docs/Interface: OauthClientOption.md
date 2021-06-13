## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: `string` |

## Table of contents

### Properties

- [consumerKeys](../wiki/Interface:%20OauthClientOption#consumerkeys)
- [mode](../wiki/Interface:%20OauthClientOption#mode)
- [qsParseArgs](../wiki/Interface:%20OauthClientOption#qsparseargs)
- [qsStringifyArgs](../wiki/Interface:%20OauthClientOption#qsstringifyargs)
- [url](../wiki/Interface:%20OauthClientOption#url)

## Properties

### consumerKeys

• **consumerKeys**: `K`[]

回调参数
eg： wx code,state

#### Defined in

[src/things/oauth-client.ts:14](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L14)

___

### mode

• `Optional` **mode**: ``"hash"`` \| ``"history"``

参数是放hash还是history
如果没有传递，则都会判断

#### Defined in

[src/things/oauth-client.ts:19](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L19)

___

### qsParseArgs

• `Optional` **qsParseArgs**: `ParseOptions`

query-string parse 格式化参数

#### Defined in

[src/things/oauth-client.ts:23](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L23)

___

### qsStringifyArgs

• `Optional` **qsStringifyArgs**: `StringifyOptions`

query-string stringify 格式化参数

#### Defined in

[src/things/oauth-client.ts:27](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L27)

___

### url

• `Optional` **url**: `string` \| `URL`

url

**`default`** window.location.href

#### Defined in

[src/things/oauth-client.ts:9](https://github.com/planjs/utils/blob/f16b9fd/src/things/oauth-client.ts#L9)
