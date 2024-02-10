export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  if (arrayOfSheep.length === 0) return 0;
  let sheeps: number = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    arrayOfSheep[i] ? sheeps++ : sheeps;;
  }
  return sheeps;
}

console.log(countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]));