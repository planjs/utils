import type { Dictionary } from '../type';

interface ArrayToTreeArgs<T> {
  /**
   * 主键ID
   * @default id
   */
  primaryKey?: keyof T;
  /**
   * 关联主键ID
   * @default parentId
   */
  parentPrimaryKey?: keyof T;
  /**
   * 叶子节点挂载的key
   * @default children
   */
  childrenKey?: string;
}

type TreeNode<T extends Dictionary<any>, K extends string = 'children'> = T &
  Record<K, TreeNode<T, K>[]>;

function arrayToTree<T extends Dictionary<any>, Node = TreeNode<T>>(
  arr: T[],
  args: ArrayToTreeArgs<T> = {},
): Record<string, Node> {
  const { parentPrimaryKey = 'parentId', primaryKey = 'id', childrenKey = 'children' } = args;
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  return arr.reduce<Record<string, Node>>((branches, item) => {
    const parentId = item[parentPrimaryKey];
    const itemId = item[primaryKey];
    if (!hasOwnProperty.call(branches, parentId)) {
      branches[parentId] = {} as Node;
    }
    if (!hasOwnProperty.call(branches[parentId], childrenKey)) {
      branches[parentId][childrenKey] = [];
    }
    branches[parentId][childrenKey].push(item);
    branches[itemId] = Object.assign(branches[itemId], item);
    return branches;
  }, {});
}

export default arrayToTree;

const a = arrayToTree(
  [
    { id: 1, pId: 2 },
    { id: 2, pId: 3 },
    { id: 3, pId: 4 },
    { id: 4, pId: 5 },
  ],
  {
    primaryKey: 'id',
    parentPrimaryKey: 'pId',
    childrenKey: 'children1',
  },
);

console.log(a[0]);
