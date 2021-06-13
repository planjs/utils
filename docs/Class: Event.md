## Table of contents

### Constructors

- [constructor](../wiki/Class:%20Event#constructor)

### Properties

- [callbacks](../wiki/Class:%20Event#callbacks)
- [eventSplitter](../wiki/Class:%20Event#eventsplitter)

### Methods

- [off](../wiki/Class:%20Event#off)
- [on](../wiki/Class:%20Event#on)
- [once](../wiki/Class:%20Event#once)
- [trigger](../wiki/Class:%20Event#trigger)

## Constructors

### constructor

• **new Event**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Object` |
| `opts.callbacks` | `Record`<string, unknown\> |

#### Defined in

[src/things/event.ts:18](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L18)

## Properties

### callbacks

• `Private` **callbacks**: `Record`<string, unknown\> = {}

#### Defined in

[src/things/event.ts:17](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L17)

___

### eventSplitter

▪ `Static` **eventSplitter**: `RegExp`

#### Defined in

[src/things/event.ts:18](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L18)

## Methods

### off

▸ **off**(`events?`, `callback?`, `context?`): [Event](../wiki/Class:%20Event)

如果什么都不传就off全部事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `events?` | `any` |
| `callback?` | `any` |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:80](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L80)

___

### on

▸ **on**<T\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback1`<T\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:28](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L28)

▸ **on**<T1, T2\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback2`<T1, T2\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:29](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L29)

▸ **on**<T1, T2, T3\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback3`<T1, T2, T3\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:30](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L30)

▸ **on**<T1, T2, T3, T4\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback4`<T1, T2, T3, T4\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:31](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L31)

▸ **on**<T1, T2, T3, T4, T5\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback5`<T1, T2, T3, T4, T5\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:32](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L32)

▸ **on**<T1, T2, T3, T4, T5, T6\>(`event`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Callback6Rest`<T1, T2, T3, T4, T5, T6\> |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:38](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L38)

___

### once

▸ **once**(`events`, `callback`, `context?`): [Event](../wiki/Class:%20Event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `any` |
| `callback` | `any` |
| `context?` | `any` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:65](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L65)

___

### trigger

▸ **trigger**(`event`): [Event](../wiki/Class:%20Event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:108](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L108)

▸ **trigger**<T1\>(`event`, `arg`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg` | `T1` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:109](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L109)

▸ **trigger**<T1, T2\>(`event`, `arg1`, `arg2`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg1` | `T1` |
| `arg2` | `T2` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:110](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L110)

▸ **trigger**<T1, T2, T3\>(`event`, `arg1`, `arg2`, `arg3`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:111](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L111)

▸ **trigger**<T1, T2, T3, T4\>(`event`, `arg1`, `arg2`, `arg3`, `arg4`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:112](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L112)

▸ **trigger**<T1, T2, T3, T4, T5\>(`event`, `arg1`, `arg2`, `arg3`, `arg4`, `arg5`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:113](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L113)

▸ **trigger**<T1, T2, T3, T4, T5, T6\>(`event`, `arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `arg6`, ...`rest`): [Event](../wiki/Class:%20Event)

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `arg6` | `T6` |
| `...rest` | `any`[] |

#### Returns

[Event](../wiki/Class:%20Event)

#### Defined in

[src/things/event.ts:122](https://github.com/planjs/utils/blob/f16b9fd/src/things/event.ts#L122)
