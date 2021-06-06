import { mapPick, arrayToTree } from '../src/array';

describe('array', () => {
  test('mapPick', () => {
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
