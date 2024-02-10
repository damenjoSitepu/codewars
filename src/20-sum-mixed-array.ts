export function sumMix(x: any[]): number {
  if (x.length === 0) return 0;
  return x.reduce((acc: any, val: any) => acc + parseInt(val), 0);
}