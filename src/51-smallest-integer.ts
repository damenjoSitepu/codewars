export function findSmallestInt(args: number[]): number {
  let smallestInt: number = args[0];
  
  for (let i = 1; i < args.length; i++) {
    if (args[i] > smallestInt) continue;
    smallestInt = args[i];
  }
  
  return smallestInt;
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));