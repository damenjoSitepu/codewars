export function toCsvText(array: number[][]): string {
  let s: string = "";
  for (let i = 0; i < array.length; i++) {
    s += `${array[i].join(",")}${i !== array.length - 1 ? '\n' : ''}`;
  }
  return s;
}

console.log(toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
]));