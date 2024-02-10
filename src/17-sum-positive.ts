export function positiveSum(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.filter((num: number) => num >= 0).reduce((acc: number, val: number) => acc + val, 0);
}