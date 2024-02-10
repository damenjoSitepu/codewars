export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  const humanCatDogYears: [number, number, number] = [0, 0, 0];
  if (!humanYears) return humanCatDogYears;

  for (let i = 0; i < humanYears; i++) {
    humanCatDogYears[0] += 1;
    humanCatDogYears[1] += i === 0 ? 15 : i === 1 ? 9 : 4;
    humanCatDogYears[2] += i === 0 ? 15 : i === 1 ? 9 : 5;
  }

  return humanCatDogYears;
}

console.log(humanYearsCatYearsDogYears(10)); // [10, 56, 64]