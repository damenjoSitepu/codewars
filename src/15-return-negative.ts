export const makeNegative = (num: number): number => {
  return num === 0 ? 0 : num > 0 ? -num : num;
};

console.log(makeNegative(20));
console.log(makeNegative(-455));
console.log(makeNegative(0));