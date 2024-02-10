export function divisibleBy(numbers: number[], divisor: number): number[]{
  if (numbers.length === 0) return [];

  const divisible: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor !== 0) continue;
    divisible.push(numbers[i]);
  }

  return divisible;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));