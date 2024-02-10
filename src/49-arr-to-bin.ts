export function arr2bin(arr: any[]): string {
  if (arr.length === 0) return "0";
  let num: number = arr.filter((v: any) => typeof v === 'number').reduce((acc: number, val: number) => acc + val, 0);
  if (!num) return "0";
  let bin: string = "";

  while (num > 0) {
    bin += String(num % 2);
    num = Math.floor(num / 2);
  }

  return bin.split("").reverse().join("");
}

console.log(arr2bin([1, 2]));
console.log(arr2bin([1, 2, 3, 4, 5]));
console.log(arr2bin([1, 10, 100, 1000]));
console.log(arr2bin([null]));
console.log(arr2bin([true, true, false, 15]));