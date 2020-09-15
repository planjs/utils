const increment_id = (): (() => number) => {
  let id = 0;
  return () => id++;
};

export default increment_id;
