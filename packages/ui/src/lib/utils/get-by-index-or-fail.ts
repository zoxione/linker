const getByIndexOrFail = <T>(array: T[], index: number): T => {
  const val = array[index];
  if (!val) {
    throw new Error(`Unexpected no value at index ${index}`);
  }
  return val;
};

export { getByIndexOrFail };
