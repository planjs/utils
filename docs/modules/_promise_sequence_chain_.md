**@planjs/utils**

[Globals](../README.md) / "promise/sequence-chain"

# Module: "promise/sequence-chain"

## Index

### Functions

* [sequenceChain](_promise_sequence_chain_.md#sequencechain)

## Functions

### sequenceChain

▸ **sequenceChain**(`handlers`: [PromiseFN](_promise_interfaces_.md#promisefn)[]): Promise\<void>

*Defined in [promise/sequence-chain.ts:8](https://github.com/planjs/utils/blob/af978cc/src/promise/sequence-chain.ts#L8)*

链式处理，向下传递结果
eg：拦截器

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`handlers` | [PromiseFN](_promise_interfaces_.md#promisefn)[] |   |

**Returns:** Promise\<void>
