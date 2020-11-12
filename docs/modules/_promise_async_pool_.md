**@planjs/utils**

[Globals](../README.md) / "promise/async-pool"

# Module: "promise/async-pool"

## Index

### Interfaces

* [AsyncPoolOpts](../interfaces/_promise_async_pool_.asyncpoolopts.md)

### Functions

* [asyncPool](_promise_async_pool_.md#asyncpool)

## Functions

### asyncPool

▸ **asyncPool**(`options`: [AsyncPoolOpts](../interfaces/_promise_async_pool_.asyncpoolopts.md)): object

*Defined in [promise/async-pool.ts:14](https://github.com/planjs/utils/blob/af978cc/src/promise/async-pool.ts#L14)*

异步池，放入需要执行的异步任务，总并行执行任务不超过设置的最大并发数量

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [AsyncPoolOpts](../interfaces/_promise_async_pool_.asyncpoolopts.md) |   |

**Returns:** object

Name | Type |
------ | ------ |
`clear` | clear |
`executor` | executor |
