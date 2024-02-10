export function squareOrSquareRoot(array: number[]): number[] {
  if (array.length === 0) return [];

  return array.map((n: number) => Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : n * n);
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));