export function solution(start: number, finish: number): number {
  if (start === finish) return 0;
  return (Math.floor((finish - start) / 3)) + ((finish - start) % 3 !== 0 ? (finish - start) % 3 : 0);
}

console.log(solution(3, 3));
console.log(solution(1, 5));
console.log(solution(2, 4));