
export function flip(dir: string, arr: number[]): number[] {
  if (!arr) return [];
  if (arr.length === 0) return [];

  let newArr: any = [];

  const tallest: number = Math.max(...arr);

  for (let i = 0; i < tallest; i++) {
    newArr.push([]);
    for (let j = 0; j < arr.length; j++) {
      if (j === (arr[i] - tallest) + i) {
        newArr[i].push(true);
      } else {
        newArr[i].push(false);
      }
    }
  }

  console.log(newArr);

  return [];
}

console.log(flip('R', [3, 2, 1, 2]));