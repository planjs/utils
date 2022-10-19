type stripHtmlTagsOption = {
  /**
   * Replace the removed tags with this string
   */
  replaceWith?: string;
  /**
   * Array of allowed tags
   * @default []
   */
  allowed?: string[] | string;
  /**
   * Array of blocked tags
   * @default []
   */
  blocked?: string[] | string;
  /**
   * Array of deleted tags
   * @default []
   */
  deleted?: string[] | string;
};

/**
 * Strip html tags from a string
 * @param str
 * @param options
 * @example
 * stripHtmlTags('<p>hello <a>word</a></p>'); // => 'hello word'
 * stripHtmlTags('<p>hello <a>word</a></p>', { blocked: ['p'] }); // => 'hello <a>word</a>'
 * stripHtmlTags('<p>hello</p>', { blocked: ['p'], replaceWith: '**' }); // => '**hello**'
 */
function stripHtmlTags(str: string, options: stripHtmlTagsOption = {}): string {
  if (!str) return '';

  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  const tagWithContent =
    /<([a-z][a-z0-9]*)\b[^<]*(?:(?!<\/([a-z][a-z0-9]*)>)<[^<]*)*<\/([a-z][a-z0-9]*)>/gi;

  const replaceWith = options.replaceWith || '';
  const allowed = options.allowed;
  const blocked = options.blocked;
  const deleted = options.deleted;

  const replaceContent = function ($0, $1) {
    if (deleted!.includes($1.toLowerCase())) {
      return '';
    }
    return $0;
  };

  const replaceTags = function ($0, $1) {
    if (blocked) {
      if (blocked.includes($1.toLowerCase())) return replaceWith;
      if (!allowed) return $0;
    }
    if (allowed && allowed.includes($1.toLowerCase())) return $0;
    return replaceWith;
  };

  let after = String(str);
  while (true) {
    const before = after;
    after = before.replace(commentsAndPhpTags, replaceWith);
    if (deleted?.length) {
      after = after.replace(tagWithContent, replaceContent);
    }
    after = after.replace(tags, replaceTags);

    if (before === after) {
      return after;
    }
  }
}

export default stripHtmlTags;
