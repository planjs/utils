**@planjs/utils**

[Globals](../README.md) / "promise/delay"

# Module: "promise/delay"

## Index

### Functions

* [delay](_promise_delay_.md#delay)

## Functions

### delay

▸ **delay**\<T>(`delayTimeMs`: number, `value`: T): Promise\<T>

*Defined in [promise/delay.ts:7](https://github.com/planjs/utils/blob/73a4845/src/promise/delay.ts#L7)*

等待一段时间，返回一个promise

**`default`** 25

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`delayTimeMs` | number |  |
`value` | T |   |

**Returns:** Promise\<T>

▸ **delay**\<T>(`delayTimeMs`: number): Promise\<void>

*Defined in [promise/delay.ts:8](https://github.com/planjs/utils/blob/73a4845/src/promise/delay.ts#L8)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`delayTimeMs` | number |

**Returns:** Promise\<void>
