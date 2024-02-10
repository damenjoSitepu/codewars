export function doubleChar(str: string): string{
  if (!str) return "";
  return str.split("").map((s: string) => String(s) + String(s)).join("");
}

console.log(doubleChar("abcd"));