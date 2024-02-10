export function pipeFix(numbers: number[]): number[]{
  if (numbers.length === 0) return [];

  const newNumbers: number[] = [numbers[0]];

  for (let i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
    newNumbers.push(newNumbers[newNumbers.length - 1] + 1);
  }
  return newNumbers;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));