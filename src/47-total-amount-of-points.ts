export function points(games: string[]): number {
  if (games.length === 0) return 0;
  let totalPoints: number = 0;
  for (let i = 0; i < games.length; i++) {
    try {
      const [x, y] = games[i].split(":");
      Number(x) === Number(y) ? totalPoints += 1 : Number(x) > Number(y) ? totalPoints += 3 : 0;
    } catch (e: any) {}
  }
  return totalPoints;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));