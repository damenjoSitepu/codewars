export function grow(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((acc: number, val: number) => acc * val);
}
