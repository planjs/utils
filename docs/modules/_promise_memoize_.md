**@planjs/utils**

[Globals](../README.md) / "promise/memoize"

# Module: "promise/memoize"

## Index

### Type aliases

* [ThenReturn](_promise_memoize_.md#thenreturn)

### Functions

* [memoize](_promise_memoize_.md#memoize)

## Type aliases

### ThenReturn

Ƭ  **ThenReturn**\<T>: T *extends* Promise\<*infer* U> ? U : T *extends* (...args: any[]) => Promise\<*infer* V> ? V : T

*Defined in [promise/memoize.ts:1](https://github.com/planjs/utils/blob/af978cc/src/promise/memoize.ts#L1)*

#### Type parameters:

Name |
------ |
`T` |

## Functions

### memoize

▸ **memoize**\<FnType>(`fn`: FnType, `harsher`: (...args: Parameters\<FnType>) => any, `timeoutMs?`: undefined \| number): FnType & { clear: () => void ; reset: (...args: Parameters\<FnType>) => void  }

*Defined in [promise/memoize.ts:13](https://github.com/planjs/utils/blob/af978cc/src/promise/memoize.ts#L13)*

缓存promise结果，支持超时时间

#### Type parameters:

Name | Type |
------ | ------ |
`FnType` | (...args: any[]) => Promise\<any> |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`fn` | FnType | - | 被代理的异步函数 |
`harsher` | (...args: Parameters\<FnType>) => any | (...args) => args[0] | 返回标示本次运行结果的key |
`timeoutMs?` | undefined \| number | - |   |

**Returns:** FnType & { clear: () => void ; reset: (...args: Parameters\<FnType>) => void  }
