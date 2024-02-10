export function cubeChecker(volume: number, side: number): boolean{
  return side <= 0 ? false : side * side * side === volume;
}

console.log(cubeChecker(1, 1));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(27, 3));
console.log(cubeChecker(0, 35));
console.log(cubeChecker(452, 1));
console.log(cubeChecker(785, 0));