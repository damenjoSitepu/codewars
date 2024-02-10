export function sameCase(a: string, b: string): number {
  return !a.match(/[a-zA-Z]/i) || !b.match(/[a-zA-Z]/i) ? -1 : (a === a.toUpperCase()) && (b === b.toUpperCase()) || (a === a.toLowerCase()) && (b === b.toLowerCase()) ? 1 : 0;
}

console.log(sameCase('C', 'B'));