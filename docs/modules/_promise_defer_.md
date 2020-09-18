**@planjs/utils**

[Globals](../README.md) / "promise/defer"

# Module: "promise/defer"

## Index

### Functions

* [defer](_promise_defer_.md#defer)

## Functions

### defer

▸ **defer**\<T>(): object

*Defined in [promise/defer.ts:1](https://github.com/planjs/utils/blob/73a4845/src/promise/defer.ts#L1)*

#### Type parameters:

Name |
------ |
`T` |

**Returns:** object

Name | Type |
------ | ------ |
`promise` | Promise\<T> |
`reject` | (reason?: any) => void |
`resolve` | (value?: T \| PromiseLike\<T>) => void |
