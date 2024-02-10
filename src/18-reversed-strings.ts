export function solution(str: string): string {
  return !str ? str : [...str].reverse().join("");
}