## Hierarchy

- `BaseRetryOption`

  ↳ **RetryOption**

## Table of contents

### Properties

- [delayMs](../wiki/Interface:%20RetryOption#delayms)
- [isRetryable](../wiki/Interface:%20RetryOption#isretryable)
- [maxAttempts](../wiki/Interface:%20RetryOption#maxattempts)

## Properties

### delayMs

• `Optional` **delayMs**: `number`

重试间隔

#### Inherited from

BaseRetryOption.delayMs

#### Defined in

[src/promise/interfaces.ts:18](https://github.com/planjs/utils/blob/f16b9fd/src/promise/interfaces.ts#L18)

___

### isRetryable

• `Optional` **isRetryable**: (`err`: `Error`) => `boolean`

如果有些错误符合预期，可以跳过

**`param`**

#### Type declaration

▸ (`err`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`boolean`

#### Defined in

[src/promise/retry.ts:9](https://github.com/planjs/utils/blob/f16b9fd/src/promise/retry.ts#L9)

___

### maxAttempts

• `Optional` **maxAttempts**: `number`

最大等待次数
不设置则一直运行

#### Inherited from

BaseRetryOption.maxAttempts

#### Defined in

[src/promise/interfaces.ts:14](https://github.com/planjs/utils/blob/f16b9fd/src/promise/interfaces.ts#L14)
