---
id: "oauthclientoption"
title: "Interface: OauthClientOption<K>"
sidebar_label: "OauthClientOption"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

## Properties

### consumerKeys

• **consumerKeys**: `K`[]

回调参数
eg： wx code,state

#### Defined in

[src/things/oauth-client.ts:15](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L15)

___

### mode

• `Optional` **mode**: ``"hash"`` \| ``"history"``

参数是放hash还是history
如果没有传递，则都会判断

#### Defined in

[src/things/oauth-client.ts:20](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L20)

___

### qsParseArgs

• `Optional` **qsParseArgs**: [`ParseOptions`](qs.parseoptions.md)

query-string parse 格式化参数

#### Defined in

[src/things/oauth-client.ts:24](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L24)

___

### qsStringifyArgs

• `Optional` **qsStringifyArgs**: [`StringifyOptions`](qs.stringifyoptions.md)

query-string stringify 格式化参数

#### Defined in

[src/things/oauth-client.ts:28](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L28)

___

### url

• `Optional` **url**: `string` \| `URL`

url

**`default`** window.location.href

#### Defined in

[src/things/oauth-client.ts:10](https://github.com/planjs/utils/blob/784afab/src/things/oauth-client.ts#L10)
