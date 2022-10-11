import { format } from '../../src';

describe('strings', () => {
  test('format', () => {
    expect(format('hello {0}', 'bob')).toBe('hello bob');
    expect(format('hello {0}', { 0: 'bob' })).toBe('hello bob');
    expect(format('hello {a}', { a: 'bob' })).toBe('hello bob');
    expect(format('hello {a}', { b: 'bob' })).toBe('hello {a}');
    expect(format('hello {a}', 'bob')).toBe('hello {a}');
    expect(format('hello {0} {1}', 'bob', ' ')).toBe('hello bob  ');
  });
});
