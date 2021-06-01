import { mapPick } from '../src/array';

describe('array', () => {
  test('get', () => {
    expect(mapPick([{ id: 1, name: 'xx' }], { label: ['name'], value: ['id'] })).toStrictEqual([
      { label: 'xx', value: 1 },
    ]);
  });
});
