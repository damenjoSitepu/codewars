export const digitize = (n: number): number[] => {
  if (!n || n < 0) return [0];
  return String(n).split("").reverse().map((_: string) => Number(_));
};

console.log(digitize(35231));