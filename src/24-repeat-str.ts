export function repeatStr(n: number, s: string): string {
  if (n === 0) return "";
  let str: string = String(s);
  for (let i = 1; i < n; i++) {
    str += String(s);
  } 
  return str;
}