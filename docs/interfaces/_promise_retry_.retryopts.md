**@planjs/utils**

[Globals](../README.md) / ["promise/retry"](../modules/_promise_retry_.md) / RetryOpts

# Interface: RetryOpts

## Hierarchy

* [BaseRetryOpts](_promise_interfaces_.baseretryopts.md)

  ↳ **RetryOpts**

## Index

### Properties

* [delayMs](_promise_retry_.retryopts.md#delayms)
* [isRetryable](_promise_retry_.retryopts.md#isretryable)
* [maxAttempts](_promise_retry_.retryopts.md#maxattempts)

## Properties

### delayMs

• `Optional` **delayMs**: undefined \| number

*Inherited from [BaseRetryOpts](_promise_interfaces_.baseretryopts.md).[delayMs](_promise_interfaces_.baseretryopts.md#delayms)*

*Defined in [promise/interfaces.ts:12](https://github.com/planjs/utils/blob/73a4845/src/promise/interfaces.ts#L12)*

重试间隔

___

### isRetryable

• `Optional` **isRetryable**: undefined \| (err: Error) => boolean

*Defined in [promise/retry.ts:9](https://github.com/planjs/utils/blob/73a4845/src/promise/retry.ts#L9)*

如果有些错误符合预期，可以跳过

**`param`** 

___

### maxAttempts

• `Optional` **maxAttempts**: undefined \| number

*Inherited from [BaseRetryOpts](_promise_interfaces_.baseretryopts.md).[maxAttempts](_promise_interfaces_.baseretryopts.md#maxattempts)*

*Defined in [promise/interfaces.ts:8](https://github.com/planjs/utils/blob/73a4845/src/promise/interfaces.ts#L8)*

最大等待次数
不设置则一直运行
