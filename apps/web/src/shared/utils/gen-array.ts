const genArray = (n: number) => {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1);
};

export { genArray };
