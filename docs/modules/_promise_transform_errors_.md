**@planjs/utils**

[Globals](../README.md) / "promise/transform-errors"

# Module: "promise/transform-errors"

## Index

### Functions

* [transformErrors](_promise_transform_errors_.md#transformerrors)

## Functions

### transformErrors

▸ **transformErrors**\<T>(`fn`: T, `errorHandler`: Function): T

*Defined in [promise/transform-errors.ts:7](https://github.com/planjs/utils/blob/af978cc/src/promise/transform-errors.ts#L7)*

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
