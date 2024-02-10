export function sumOfDifferences(arr: number[]): number {
  if (arr.length === 0) return 0;

  arr.sort((a: number, b: number) => b - a);

  let count: number = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    count += arr[i] - arr[i + 1];
  }
  return count;
}

console.log(sumOfDifferences([1, 2, 10]));
// console.log(sumOfDifferences([12, -9, -4, -10, -6, -10, -13, -13, -2, -15, 0, 14]));