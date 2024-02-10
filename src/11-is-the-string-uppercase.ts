export function isUpperCase(str: string) {
  return !str ? false : str === str.toUpperCase();
}

console.log(isUpperCase('C'));