export function getAverage(marks:number[]):number{
  if (marks.length === 0) return 0;
  return Math.floor(marks.reduce((acc: number, val: number) => acc + val, 0) / marks.length);
}