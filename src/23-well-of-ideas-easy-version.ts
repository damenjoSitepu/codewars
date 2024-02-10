export function well(x: string[]): string{
  if (x.length === 0) return "Fail!";
  
  const ideas: Map<string, number> = new Map();

  for (let i = 0; i < x.length; i++) {
    if (ideas.has(x[i])) {
      ideas.set(x[i], (ideas.get(x[i]) ?? 0) + 1)
      continue;
    }
    ideas.set(x[i], 1);
  }

  if ((ideas.get("good") ?? 0) === 0 && (ideas.get("bad") ?? 0) > 0) {
    return "Fail!";
  } else if ((ideas.get("good") ?? 0) <= 2) {
    return "Publish!";
  } else if ((ideas.get("good") ?? 0) > 2) {
    return "I smell a series!";
  }
  return "";
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));