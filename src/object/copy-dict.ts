import createDict from './create-dict';

/**
 * 复制一个新的字典
 * @param dict
 */
function copyDict<T>(dict: T): T {
  return Object.assign(createDict(), dict);
}

export default copyDict;
