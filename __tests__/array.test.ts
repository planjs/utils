import { arrayAverage, arrayMove, arrayRandom, mapPick, arrayToTree } from '../src/array';

describe('array', () => {
  test('array-average', () => {
    expect(arrayAverage([1, 1, 1, 1])).toBe(1);
    expect(arrayAverage([2, 3, 13])).toBe(6);
  });

  test('array-move', () => {
    const arr = [1, 2, 3, 4];
    arrayMove(arr, 2, 3);
    expect(arr).toStrictEqual([1, 2, 4, 3]);
    arrayMove(arr, 5, 4);
    expect(arr).toStrictEqual([1, 2, 4, 3]);
  });

  test('array-random', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayRandom(arr)).toBeLessThanOrEqual(Math.max(...arr));
  });

  test('map-pick', () => {
    expect(mapPick([{ id: 1, name: 'xx' }], { label: ['name'], value: ['id'] })).toStrictEqual([
      { label: 'xx', value: 1 },
    ]);
  });

  test('arrayToTree', () => {
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
});
