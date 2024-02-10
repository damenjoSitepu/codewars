export function monkeyCount(n: number) {
  if (!n) return [];
  let sons: number[] = [];
  for (let i = 1; i <= n; i++) {
    sons = [...sons, i];
  }
  return sons;
}