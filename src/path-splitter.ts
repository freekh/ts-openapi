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

console.log(
  splitPaths(
    [
      "/article/conversions",
      "/article/referrals",
      "/article/totals",
      "/article/windows",
      "/article/content-folder/averages",
      "/article/content-folder/range/views",
      "/article/content-folder/referrals",
      "/article/content-folder/sorted-list",
      "/article/content-folder/windows",
      "/radio/podcast/listens",
      "/video/clip/conversions",
      "/video/program/total-screen-rating",
      "/video/program/web-rating",
      "/service/visitor-frequencies",
      "/service/unique-visitors"
    ],
    10
  )
);
