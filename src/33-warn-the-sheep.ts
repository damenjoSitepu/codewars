export function warnTheSheep(queue: string[]): string {
  if (queue.length === 0) return "";

  queue = queue.reverse();
  for (let i = 0; i < queue.length; i++) {
    if (i === 0 && queue[i] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } 
    if (queue[i] === "wolf") {
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
    }
  }
  return "";
}