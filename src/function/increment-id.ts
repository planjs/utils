/**
 * 自增id
 * @return {Function} return number
 */
const incrementId = (): (() => number) => {
  let id = 0;
  return () => id++;
};

export default incrementId;
