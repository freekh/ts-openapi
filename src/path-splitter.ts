export function splitPaths(
  paths: string[],
  max: number
): { [id: string]: string[] } {
  return paths.reduce(
    ({ res, last }, path) => {
      if (res[last]?.length >= max) {
        return { res: { ...res, [last + 1]: [path] }, last: last + 1 };
      }
      return { res: { ...res, [last]: (res[last] || []).concat(path) }, last };
    },
    { res: {} as { [id: string]: string[] }, last: 0 }
  ).res;
}

