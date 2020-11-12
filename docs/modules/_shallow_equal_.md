**@planjs/utils**

[Globals](../README.md) / "shallow-equal"

# Module: "shallow-equal"

## Index

### Functions

* [shallowEqual](_shallow_equal_.md#shallowequal)

## Functions

### shallowEqual

▸ **shallowEqual**\<Context>(`objA`: any, `objB`: any, `compare?`: undefined \| (this: Context,objA: any,objB: any,indexOrKey?: number \| string) => boolean \| void, `compareContext?`: Context): boolean

*Defined in [shallow-equal.ts:9](https://github.com/planjs/utils/blob/af978cc/src/shallow-equal.ts#L9)*

浅比较两个值

#### Type parameters:

Name | Default |
------ | ------ |
`Context` | any |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`objA` | any |  |
`objB` | any |  |
`compare?` | undefined \| (this: Context,objA: any,objB: any,indexOrKey?: number \| string) => boolean \| void |  |
`compareContext?` | Context |  https://github.com/dashed/shallowequal  |

**Returns:** boolean
