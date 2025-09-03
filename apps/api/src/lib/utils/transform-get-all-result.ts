const transformGetAllResult = <T>(result: { row: T; count: string | null }[]): { items: T[]; total: number } => {
  return {
    items: result.map(({ row }) => row),
    total: Number(result[0]?.count ?? 0),
  };
};

export { transformGetAllResult };
