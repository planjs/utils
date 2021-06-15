import { Decimal } from 'decimal.js';

const instanceFunc = (name: keyof typeof Decimal) => (x: Decimal.Value) => new Decimal(x)[name]();

const decimal = {
  decimal: (n: Decimal.Value) => new Decimal(n),
  abs: instanceFunc('abs'),
  add: instanceFunc('add'),
  ceil: instanceFunc('ceil'),
  round: instanceFunc('round'),
};

export default decimal;
