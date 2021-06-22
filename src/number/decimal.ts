import { Decimal } from 'decimal.js';
import type { AnyFn } from '../type';

const instanceFunc = (name: keyof typeof Decimal) => (x: Decimal.Value) => new Decimal(x)[name]();

const instanceBiFunc = <T extends AnyFn = (...values: Decimal.Value[]) => Decimal>(
  name: keyof typeof Decimal,
) => {
  return function (...values: Decimal.Value[]) {
    let result: Decimal = new Decimal(values[0]);
    let index = 1;
    while (index < values.length) {
      result = result[name](values[index]);
      index++;
    }
    return result;
  } as T;
};

function decimal(n: Decimal.Value) {
  return new Decimal(n);
}
decimal.add = instanceBiFunc('add');
decimal.sub = instanceFunc('sub');
decimal.mul = instanceFunc('mul');
decimal.div = instanceFunc('div');

export default decimal;
