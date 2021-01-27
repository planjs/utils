export interface SettledPromises<T, V> {
  errors: V[];
  results: T[];
}

/**
 * 处理多个promise的时候，返回promise数组的成功失败结果,索引为promise数组下标
 * 并行Promise.all执行
 * @param promises
 * @param errFn
 */
async function settleAll<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any, ind: number) => Promise<V>,
): Promise<SettledPromises<T, V>>;
async function settleAll<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any) => Promise<V>,
): Promise<SettledPromises<T, V>>;
async function settleAll<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any, ind: number) => V,
): Promise<SettledPromises<T, V>>;
async function settleAll<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any) => V,
): Promise<SettledPromises<T, V>>;
async function settleAll<T, V>(
  promises: readonly Promise<T>[],
  errFn: (err: any, ind: number) => V = (err) => err,
): Promise<SettledPromises<T, V>> {
  const intermediateResults = await Promise.all(
    (promises || []).map(async (p, i) => {
      try {
        return { result: await p };
      } catch (err) {
        return { error: await errFn(err, i) };
      }
    }),
  );
  const settledPromises: SettledPromises<T, V> = { results: [], errors: [] };
  intermediateResults.reduce((acc, res) => {
    const { result, error } = res;
    if (error) acc.errors.push(error);
    if (result) acc.results.push(result);
    return acc;
  }, settledPromises);
  return settledPromises;
}

export default settleAll;
