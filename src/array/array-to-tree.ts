import type { Dictionary } from '../type';

export interface ArrayToTreeOption<T, ChildrenKey extends string = 'children'> {
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
  childrenKey?: ChildrenKey;
}

type TreeNode<T, K extends string = 'children'> = T & Partial<Record<K, TreeNode<T, K>[]>>;

/**
 * 数组通过关联主键，返回树
 * @param array
 * @param option
 * @return tree { { [id]: TreeNode } } 可以根据root节点id获取树
 * @example
 * ```ts
 * const arr = [
 *   { id: 1, parentId: 0 },
 *   { id: 2, parentId: 1 },
 *   { id: 3, parentId: 2 },
 *   { id: 4, parentId: 3 }
 * ]
 * const tree = arrayToTree(arr)[0];
 * // out
 * {
 *   children: [
 *     {
 *       id: 1,
 *       parentId: 0,
 *       children: [
 *         {
 *           id: 2,
 *           parentId: 1,
 *           children: [
 *             {
 *               id: 3,
 *               parentId: 2,
 *               children: [
 *                 {
 *                   id: 4,
 *                   parentId: 3
 *                 }
 *               ]
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ],
 * }
 * ```
 * @category Array
 */
function arrayToTree<
  T extends Dictionary<any>,
  K extends string,
  Opts extends ArrayToTreeOption<T, K> = ArrayToTreeOption<T, K>,
  Node = TreeNode<T, NonNullable<Opts['childrenKey']>>
>(array: T[], option?: Opts): Record<string, Node> {
  const { parentPrimaryKey = 'parentId', primaryKey = 'id', childrenKey = 'children' } =
    option || {};
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  return array.reduce<Record<string, Node>>((branches, node) => {
    const parentId = node[parentPrimaryKey];
    const itemId = node[primaryKey];
    if (!hasOwnProperty.call(branches, parentId)) {
      branches[parentId] = {} as Node;
    }
    if (!hasOwnProperty.call(branches[parentId], childrenKey)) {
      branches[parentId][childrenKey as string] = [];
    }
    branches[parentId][childrenKey as string].push(node);
    branches[itemId] = Object.assign(node, branches[itemId]);
    return branches;
  }, {});
}

export default arrayToTree;
