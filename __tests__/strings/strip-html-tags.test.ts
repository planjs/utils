import { stripHtmlTags } from '../../src';

describe('strings', () => {
  test('stripHtmlTags', () => {
    expect(stripHtmlTags('<span>hello bob</span>')).toBe('hello bob');
    expect(
      stripHtmlTags('<p><span>hello bob</span></p>', {
        allowed: 'p',
      }),
    ).toBe('<p>hello bob</p>');
  });
});
