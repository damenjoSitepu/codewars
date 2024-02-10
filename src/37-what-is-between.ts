export function between(a: number, b: number): number[] {
  const numbers: number[] = [a];

  for (let i = a; i < b; i++) {
    numbers.push(numbers[numbers.length - 1] + 1);
  }
  return numbers;
}

console.log(between(1, 4));