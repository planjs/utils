**@planjs/utils**

[Globals](../README.md) / "promise/transformErrors"

# Module: "promise/transformErrors"

## Index

### Functions

* [transformErrors](_promise_transformerrors_.md#transformerrors)

## Functions

### transformErrors

▸ **transformErrors**\<T>(`fn`: T, `errorHandler`: Function): T

*Defined in [promise/transformErrors.ts:7](https://github.com/planjs/utils/blob/73a4845/src/promise/transformErrors.ts#L7)*

定义promise错误处理函数
一些符合预期的错误，不需要报错，可以加一层转换下

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Function |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fn` | T |  |
`errorHandler` | Function |   |

**Returns:** T
