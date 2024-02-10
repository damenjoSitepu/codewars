export function toAlternatingCase(s: string): string {
  return s.split("").map((c: string) => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join("");
}

console.log(toAlternatingCase("hello world"));