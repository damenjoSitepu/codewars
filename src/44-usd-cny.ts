export function usdcny(usd: number): string {
  const a: string = "abc";
  a.toUpperCase()
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(15));