export function remove(s: string): string {
  if (!s) return "";
  return s[s.length - 1] === "!" ? s.substring(0, s.length - 1) : s;
}

console.log(remove("Hi!"));