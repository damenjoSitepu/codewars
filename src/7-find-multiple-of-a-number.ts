export function findMultiples(integer: number, limit: number): number[] {
  let numbers: number[] = [integer];

  while ((numbers[numbers.length - 1] + integer) <= limit) {
    numbers = [...numbers, numbers[numbers.length - 1] + integer];
  }

  return numbers;
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));