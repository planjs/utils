/**
 * 自增id
 * @return {Function} return number
 * @category Function
 */
const incrementId = (): (() => number) => {
  let id = 0;
  return () => id++;
};

export default incrementId;
