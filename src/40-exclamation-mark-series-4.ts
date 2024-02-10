export function remove(s: string): string {
  if (!s) return "";
  return s.replaceAll("!", "") + "!";
}

console.log(remove("Hi!!!"));