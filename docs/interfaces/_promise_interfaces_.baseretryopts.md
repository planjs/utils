**@planjs/utils**

[Globals](../README.md) / ["promise/interfaces"](../modules/_promise_interfaces_.md) / BaseRetryOpts

# Interface: BaseRetryOpts

## Hierarchy

* **BaseRetryOpts**

  ↳ [RetryOpts](_promise_retry_.retryopts.md)

## Index

### Properties

* [delayMs](_promise_interfaces_.baseretryopts.md#delayms)
* [maxAttempts](_promise_interfaces_.baseretryopts.md#maxattempts)

## Properties

### delayMs

• `Optional` **delayMs**: undefined \| number

*Defined in [promise/interfaces.ts:12](https://github.com/planjs/utils/blob/73a4845/src/promise/interfaces.ts#L12)*

重试间隔

___

### maxAttempts

• `Optional` **maxAttempts**: undefined \| number

*Defined in [promise/interfaces.ts:8](https://github.com/planjs/utils/blob/73a4845/src/promise/interfaces.ts#L8)*

最大等待次数
不设置则一直运行
