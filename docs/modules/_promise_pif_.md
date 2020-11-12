**@planjs/utils**

[Globals](../README.md) / "promise/pIf"

# Module: "promise/pIf"

## Index

### Functions

* [pIf](_promise_pif_.md#pif)

## Functions

### pIf

▸ **pIf**\<ValueType, DoIfReturnType, DoElseReturnType>(`condition`: boolean \| (value: ValueType) => boolean \| PromiseLike\<boolean>, `doIf`: (value: ValueType) => DoIfReturnType \| PromiseLike\<DoIfReturnType>, `doElse?`: undefined \| (value: ValueType) => DoElseReturnType \| PromiseLike\<DoElseReturnType>): function

*Defined in [promise/pIf.ts:7](https://github.com/planjs/utils/blob/af978cc/src/promise/pIf.ts#L7)*

promise 链式条件判断

#### Type parameters:

Name | Default |
------ | ------ |
`ValueType` | - |
`DoIfReturnType` | - |
`DoElseReturnType` | ValueType |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | boolean \| (value: ValueType) => boolean \| PromiseLike\<boolean> | true 调用 doIf 否则 doElse |
`doIf` | (value: ValueType) => DoIfReturnType \| PromiseLike\<DoIfReturnType> | 如果 condition 为 true 执行 |
`doElse?` | undefined \| (value: ValueType) => DoElseReturnType \| PromiseLike\<DoElseReturnType> | 如果 condition 为 false 执行  |

**Returns:** function
