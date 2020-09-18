**@planjs/utils**

[Globals](../README.md) / ["event"](../modules/_event_.md) / Event

# Class: Event

## Hierarchy

* **Event**

## Index

### Constructors

* [constructor](_event_.event.md#constructor)

### Properties

* [callbacks](_event_.event.md#callbacks)
* [eventSplitter](_event_.event.md#eventsplitter)

### Methods

* [off](_event_.event.md#off)
* [on](_event_.event.md#on)
* [once](_event_.event.md#once)
* [trigger](_event_.event.md#trigger)

## Constructors

### constructor

\+ **new Event**(`opts?`: undefined \| { callbacks: Record\<string, unknown>  }): [Event](_event_.event.md)

*Defined in [event.ts:18](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`opts?` | undefined \| { callbacks: Record\<string, unknown>  } |

**Returns:** [Event](_event_.event.md)

## Properties

### callbacks

• `Private` **callbacks**: Record\<string, unknown>

*Defined in [event.ts:17](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L17)*

___

### eventSplitter

▪ `Static` **eventSplitter**: RegExp = /\s+/

*Defined in [event.ts:18](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L18)*

## Methods

### off

▸ **off**(`events?`: any, `callback?`: any, `context?`: any): this

*Defined in [event.ts:80](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L80)*

如果什么都不传就off全部事件

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`events?` | any |  |
`callback?` | any |  |
`context?` | any |   |

**Returns:** this

___

### on

▸ **on**\<T>(`event`: string, `callback`: [Callback1](../modules/_event_.md#callback1)\<T>, `context?`: any): this

*Defined in [event.ts:28](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L28)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback1](../modules/_event_.md#callback1)\<T> |
`context?` | any |

**Returns:** this

▸ **on**\<T1, T2>(`event`: string, `callback`: [Callback2](../modules/_event_.md#callback2)\<T1, T2>, `context?`: any): this

*Defined in [event.ts:29](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L29)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback2](../modules/_event_.md#callback2)\<T1, T2> |
`context?` | any |

**Returns:** this

▸ **on**\<T1, T2, T3>(`event`: string, `callback`: [Callback3](../modules/_event_.md#callback3)\<T1, T2, T3>, `context?`: any): this

*Defined in [event.ts:30](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L30)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback3](../modules/_event_.md#callback3)\<T1, T2, T3> |
`context?` | any |

**Returns:** this

▸ **on**\<T1, T2, T3, T4>(`event`: string, `callback`: [Callback4](../modules/_event_.md#callback4)\<T1, T2, T3, T4>, `context?`: any): this

*Defined in [event.ts:31](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L31)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback4](../modules/_event_.md#callback4)\<T1, T2, T3, T4> |
`context?` | any |

**Returns:** this

▸ **on**\<T1, T2, T3, T4, T5>(`event`: string, `callback`: [Callback5](../modules/_event_.md#callback5)\<T1, T2, T3, T4, T5>, `context?`: any): this

*Defined in [event.ts:32](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L32)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |
`T5` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback5](../modules/_event_.md#callback5)\<T1, T2, T3, T4, T5> |
`context?` | any |

**Returns:** this

▸ **on**\<T1, T2, T3, T4, T5, T6>(`event`: string, `callback`: [Callback6Rest](../modules/_event_.md#callback6rest)\<T1, T2, T3, T4, T5, T6>, `context?`: any): this

*Defined in [event.ts:38](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L38)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |
`T5` |
`T6` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`callback` | [Callback6Rest](../modules/_event_.md#callback6rest)\<T1, T2, T3, T4, T5, T6> |
`context?` | any |

**Returns:** this

___

### once

▸ **once**(`events`: any, `callback`: any, `context?`: any): this

*Defined in [event.ts:65](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`events` | any |
`callback` | any |
`context?` | any |

**Returns:** this

___

### trigger

▸ **trigger**(`event`: string): this

*Defined in [event.ts:108](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L108)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |

**Returns:** this

▸ **trigger**\<T1>(`event`: string, `arg`: T1): this

*Defined in [event.ts:109](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L109)*

#### Type parameters:

Name |
------ |
`T1` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg` | T1 |

**Returns:** this

▸ **trigger**\<T1, T2>(`event`: string, `arg1`: T1, `arg2`: T2): this

*Defined in [event.ts:110](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L110)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg1` | T1 |
`arg2` | T2 |

**Returns:** this

▸ **trigger**\<T1, T2, T3>(`event`: string, `arg1`: T1, `arg2`: T2, `arg3`: T3): this

*Defined in [event.ts:111](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L111)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

**Returns:** this

▸ **trigger**\<T1, T2, T3, T4>(`event`: string, `arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): this

*Defined in [event.ts:112](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L112)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

**Returns:** this

▸ **trigger**\<T1, T2, T3, T4, T5>(`event`: string, `arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): this

*Defined in [event.ts:113](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L113)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |
`T5` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

**Returns:** this

▸ **trigger**\<T1, T2, T3, T4, T5, T6>(`event`: string, `arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `arg6`: T6, ...`rest`: any[]): this

*Defined in [event.ts:122](https://github.com/planjs/utils/blob/73a4845/src/event.ts#L122)*

#### Type parameters:

Name |
------ |
`T1` |
`T2` |
`T3` |
`T4` |
`T5` |
`T6` |

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`arg6` | T6 |
`...rest` | any[] |

**Returns:** this
