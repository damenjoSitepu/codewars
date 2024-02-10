export function stairsIn20(stairs:number[][]): number {
  return stairs.map((day: number[]) => day.reduce((acc: number, val: number) => acc + val, 0)).reduce((acc: number, val: number) => acc + val, 0) * 20;
};