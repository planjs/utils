import {
  arrayAverage,
  arrayMove,
  arrayRandom,
  arraySplice,
  arraySum,
  arrayToMap,
  arrayToTree,
  chunk,
  arrayEachRight,
  mapPick,
  range,
  shuffle,
} from '../src/array';

describe('array', () => {
  test('array-average', () => {
    expect(arrayAverage([1, 1, 1, 1])).toBe(1);
    expect(arrayAverage([2, 3, 13])).toBe(6);
  });

  test('array-move', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayMove(arr, 2, 3)).toStrictEqual([1, 2, 4, 3]);
    expect(arrayMove(arr, 5, 4)).toStrictEqual([1, 2, 4, 3]);
  });

  test('array-random', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayRandom(arr)).toBeLessThanOrEqual(Math.max(...arr));
  });

  test('array-splice', () => {
    const arr = [1, 2, 3, 4];
    arraySplice(arr, [1, 2]);
    expect(arr).toStrictEqual([1, 4]);
  });

  test('array-sum', () => {
    const arr = [1, 2, 3, 4];
    expect(arraySum(arr)).toBe(10);
  });

  test('array-to-map', () => {
    expect(arrayToMap([{ id: 1 }, { id: 2 }], ['id'])).toStrictEqual({
      1: { id: 1 },
      2: { id: 2 },
    });
  });

  test('array-to-tree', () => {
    const arr = [
      { id: 1, parentId: 0 },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 2 },
      { id: 4, parentId: 3 },
    ];
    expect(arrayToTree(arr)[0]).toStrictEqual({
      children: [
        {
          id: 1,
          parentId: 0,
          children: [
            {
              id: 2,
              parentId: 1,
              children: [
                {
                  id: 3,
                  parentId: 2,
                  children: [
                    // @ts-ignore
                    {
                      id: 4,
                      parentId: 3,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });

  test('chunk', () => {
    expect(chunk([1, 2, 3, 4], 2)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('array-each-right', () => {
    const arr = [1, 2, 3, 4];
    const result: number[] = [];
    arrayEachRight(arr, (item) => {
      result.push(item);
    });
    expect(result).toStrictEqual(arr.slice().reverse());
  });

  test('map-pick', () => {
    expect(mapPick([{ id: 1, name: 'xx' }], { label: ['name'], value: ['id'] })).toStrictEqual([
      { label: 'xx', value: 1 },
    ]);
  });

  test('range', () => {
    expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(range(1, 5, 2)).toStrictEqual([1, 3, 5]);
  });

  test('shuffle', () => {
    const arr = [1, 2, 3, 4];
    const org = arr.slice();
    range(1, 16).forEach(() => {
      shuffle(arr);
      expect(org).not.toContainEqual(arr);
      expect(
        arr.every((v) => {
          expect(org).toContain(v);
          return true;
        }),
      ).toBe(true);
    });
  });
});
