**@planjs/utils**

[Globals](../README.md) / "promise/map-limit"

# Module: "promise/map-limit"

## Index

### Functions

* [mapLimit](_promise_map_limit_.md#maplimit)

## Functions

### mapLimit

▸ **mapLimit**\<T, V>(`input`: readonly T[], `limit`: number, `iteratee`: (value: T,index: number) => Promise\<V>): Promise\<V[]>

*Defined in [promise/map-limit.ts:7](https://github.com/planjs/utils/blob/af978cc/src/promise/map-limit.ts#L7)*

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | readonly T[] |  |
`limit` | number |  |
`iteratee` | (value: T,index: number) => Promise\<V> |   |

**Returns:** Promise\<V[]>

▸ **mapLimit**\<T, V>(`input`: readonly T[], `limit`: number, `iteratee`: (value: T) => Promise\<V>): Promise\<V[]>

*Defined in [promise/map-limit.ts:12](https://github.com/planjs/utils/blob/af978cc/src/promise/map-limit.ts#L12)*

#### Type parameters:

Name |
------ |
`T` |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`input` | readonly T[] |
`limit` | number |
`iteratee` | (value: T) => Promise\<V> |

**Returns:** Promise\<V[]>

▸ **mapLimit**\<T, V>(`input`: T, `limit`: number, `iteratee`: (value: T[keyof T],key: string) => Promise\<V>): Promise\<V[]>

*Defined in [promise/map-limit.ts:17](https://github.com/planjs/utils/blob/af978cc/src/promise/map-limit.ts#L17)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Object |
`V` | - |

#### Parameters:

Name | Type |
------ | ------ |
`input` | T |
`limit` | number |
`iteratee` | (value: T[keyof T],key: string) => Promise\<V> |

**Returns:** Promise\<V[]>

▸ **mapLimit**\<T, V>(`input`: T, `limit`: number, `iteratee`: (value: T[keyof T]) => Promise\<V>): Promise\<V[]>

*Defined in [promise/map-limit.ts:22](https://github.com/planjs/utils/blob/af978cc/src/promise/map-limit.ts#L22)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Object |
`V` | - |

#### Parameters:

Name | Type |
------ | ------ |
`input` | T |
`limit` | number |
`iteratee` | (value: T[keyof T]) => Promise\<V> |

**Returns:** Promise\<V[]>
