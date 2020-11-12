**@planjs/utils**

[Globals](../README.md) / "promise/retry"

# Module: "promise/retry"

## Index

### Interfaces

* [RetryOpts](../interfaces/_promise_retry_.retryopts.md)

### Functions

* [retry](_promise_retry_.md#retry)

## Functions

### retry

▸ **retry**\<T>(`fn`: T, `retryOpts`: [RetryOpts](../interfaces/_promise_retry_.retryopts.md)): T

*Defined in [promise/retry.ts:18](https://github.com/planjs/utils/blob/af978cc/src/promise/retry.ts#L18)*

promise重试
如果没有重试次数则一直重试

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Function |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fn` | T | 重试函数，需要返回promise |
`retryOpts` | [RetryOpts](../interfaces/_promise_retry_.retryopts.md) |   |

**Returns:** T
