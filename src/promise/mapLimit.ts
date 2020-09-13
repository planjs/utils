/**
 *
 * @param input
 * @param limit
 * @param iteratee
 */
async function mapLimit<T, V>(
  input: readonly T[],
  limit: number,
  iteratee: (value: T, index: number) => Promise<V>,
): Promise<V[]>;
async function mapLimit<T, V>(
  input: readonly T[],
  limit: number,
  iteratee: (value: T) => Promise<V>,
): Promise<V[]>;
async function mapLimit<T extends Object, V>(
  input: T,
  limit: number,
  iteratee: (value: T[keyof T], key: string) => Promise<V>,
): Promise<V[]>;
async function mapLimit<T extends Object, V>(
  input: T,
  limit: number,
  iteratee: (value: T[keyof T]) => Promise<V>,
): Promise<V[]>;
async function mapLimit<V>(input: any, limit: number, iteratee: any): Promise<V[]> {
  if (!input) {
    return [];
  }

  const isArray = input.length !== undefined;
  const size = (() => {
    if (isArray) {
      return input.length;
    }

    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ in input) {
      ++count;
    }
    return count;
  })();

  const allValues = new Array(size);
  const results = new Array(size);

  let i = 0;
  for (const key in input) {
    const possiblyNumericKey = isArray ? i : key;
    allValues[size - 1 - i] = [input[key], i, possiblyNumericKey];
    ++i;
  }

  const execute = async () => {
    while (allValues.length > 0) {
      const [val, index, key] = allValues.pop();
      results[index] = await iteratee(val, key);
    }
  };

  const allExecutors = [];
  for (let j = 0; j < limit; ++j) {
    allExecutors.push(execute());
  }
  await Promise.all(allExecutors);

  return results;
}

export default mapLimit;
