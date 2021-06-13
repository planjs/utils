## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `ChildrenKey` | `ChildrenKey`: `string` = ``"children"`` |

## Table of contents

### Properties

- [childrenKey](../wiki/Interface:%20ArrayToTreeOption#childrenkey)
- [parentPrimaryKey](../wiki/Interface:%20ArrayToTreeOption#parentprimarykey)
- [primaryKey](../wiki/Interface:%20ArrayToTreeOption#primarykey)

## Properties

### childrenKey

• `Optional` **childrenKey**: `ChildrenKey`

叶子节点挂载的key

**`default`** children

#### Defined in

[src/array/array-to-tree.ts:18](https://github.com/planjs/utils/blob/f16b9fd/src/array/array-to-tree.ts#L18)

___

### parentPrimaryKey

• `Optional` **parentPrimaryKey**: keyof `T`

关联主键ID

**`default`** parentId

#### Defined in

[src/array/array-to-tree.ts:13](https://github.com/planjs/utils/blob/f16b9fd/src/array/array-to-tree.ts#L13)

___

### primaryKey

• `Optional` **primaryKey**: keyof `T`

主键ID

**`default`** id

#### Defined in

[src/array/array-to-tree.ts:8](https://github.com/planjs/utils/blob/f16b9fd/src/array/array-to-tree.ts#L8)
