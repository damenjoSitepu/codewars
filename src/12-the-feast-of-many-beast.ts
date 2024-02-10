export function feast(beast:string, dish:string):boolean {
  try {
    return (beast[0] + beast[beast.length - 1]).toLowerCase() === (dish[0] + dish[dish.length - 1].toLowerCase());
  } catch (e: any) {
    return false;
  }
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));