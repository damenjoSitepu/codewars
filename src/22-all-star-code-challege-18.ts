export function strCount(str: string, letter: string): number {
  if (!str) return 0;

  const charMap: Map<string, number> = new Map();
  for (let i = 0; i < str.length; i++) {
    if (charMap.has(str[i])) {
      charMap.set(str[i], (charMap.get(str[i]) ?? 0) + 1);
      continue;
    }
    charMap.set(str[i], 1);
  }
  return charMap.get(letter) ?? 0;
} 

console.log(strCount('Hello', 'o'));