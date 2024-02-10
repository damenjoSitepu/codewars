export function sumArray(array:number[] | null) : number {
  if (!array || array.length === 0) return 0;
  
  array.sort((a: number, b: number) => a - b);

  return array.map((el: number, idx: number) => {
    return idx === 0 ? 0 : idx === (array.length - 1) ? 0 : el;
  }).reduce((acc: number, val: number) => acc + val);
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]));