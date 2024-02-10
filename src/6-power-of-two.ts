export function powersOfTwo(n: number): number[]{
  if (!n) return [1];
  let numbers: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (numbers.length === 0) {
      numbers = [1];
      continue;
    }
    numbers = [...numbers, numbers[numbers.length - 1] * 2];
  }
  return numbers;
}

console.log(powersOfTwo(4));