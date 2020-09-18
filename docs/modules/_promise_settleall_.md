**@planjs/utils**

[Globals](../README.md) / "promise/settleAll"

# Module: "promise/settleAll"

## Index

### Interfaces

* [SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)

### Functions

* [settleAll](_promise_settleall_.md#settleall)

## Functions

### settleAll

▸ **settleAll**\<T, V>(`promises`: readonly Promise\<T>[], `errFn?`: undefined \| (err: any,ind: number) => Promise\<V>): Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

*Defined in [promise/settleAll.ts:12](https://github.com/planjs/utils/blob/73a4845/src/promise/settleAll.ts#L12)*

处理多个promise的时候，返回promise数组的成功失败结果,索引为promise数组下标
并行Promise.all执行

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`promises` | readonly Promise\<T>[] |  |
`errFn?` | undefined \| (err: any,ind: number) => Promise\<V> |   |

**Returns:** Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

▸ **settleAll**\<T, V>(`promises`: readonly Promise\<T>[], `errFn?`: undefined \| (err: any) => Promise\<V>): Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

*Defined in [promise/settleAll.ts:16](https://github.com/planjs/utils/blob/73a4845/src/promise/settleAll.ts#L16)*

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`promises` | readonly Promise\<T>[] |
`errFn?` | undefined \| (err: any) => Promise\<V> |

**Returns:** Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

▸ **settleAll**\<T, V>(`promises`: readonly Promise\<T>[], `errFn?`: undefined \| (err: any,ind: number) => V): Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

*Defined in [promise/settleAll.ts:20](https://github.com/planjs/utils/blob/73a4845/src/promise/settleAll.ts#L20)*

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`promises` | readonly Promise\<T>[] |
`errFn?` | undefined \| (err: any,ind: number) => V |

**Returns:** Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

▸ **settleAll**\<T, V>(`promises`: readonly Promise\<T>[], `errFn?`: undefined \| (err: any) => V): Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>

*Defined in [promise/settleAll.ts:24](https://github.com/planjs/utils/blob/73a4845/src/promise/settleAll.ts#L24)*

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`promises` | readonly Promise\<T>[] |
`errFn?` | undefined \| (err: any) => V |

**Returns:** Promise\<[SettledPromises](../interfaces/_promise_settleall_.settledpromises.md)\<T, V>>
