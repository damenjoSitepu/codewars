export function countPositivesSumNegatives(input: any) {
  if (!input) return [];
  if (input.length === 0) return [];
  return [[...input.filter((num: number) => num > 0)].length, [...input.filter((num: number) => num < 0)].reduce((acc: number, val: number) => acc + val, 0)];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))