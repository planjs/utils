**@planjs/utils**

[Globals](../README.md) / "promise/asyncPool"

# Module: "promise/asyncPool"

## Index

### Interfaces

* [AsyncPoolOpts](../interfaces/_promise_asyncpool_.asyncpoolopts.md)

### Functions

* [asyncPool](_promise_asyncpool_.md#asyncpool)

## Functions

### asyncPool

▸ **asyncPool**(`options`: [AsyncPoolOpts](../interfaces/_promise_asyncpool_.asyncpoolopts.md)): object

*Defined in [promise/asyncPool.ts:14](https://github.com/planjs/utils/blob/73a4845/src/promise/asyncPool.ts#L14)*

异步池，放入需要执行的异步任务，总并行执行任务不超过设置的最大并发数量

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [AsyncPoolOpts](../interfaces/_promise_asyncpool_.asyncpoolopts.md) |   |

**Returns:** object

Name | Type |
------ | ------ |
`clear` | clear |
`executor` | executor |
