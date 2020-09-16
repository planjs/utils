import { uuid } from '../src';

// https://github.com/afram/is-uuid/blob/master/lib/is-uuid.js
const uuidReg = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('uuid', () => {
  test('valid', () => {
    expect(uuidReg.test(uuid())).toBe(true);
  });

  test('Generate 10000 unique', () => {
    expect(
      Array.from(
        Array(10000)
          .fill(0)
          .reduce((acc) => {
            acc.add(uuid());
            return acc;
          }, new Set()),
      ).length,
    ).toBe(10000);
  });
});
