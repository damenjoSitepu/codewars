export function nearestSq(n: number): number {
  if (n <= 1) return 1;
  const nearest: number[] = [1];

  let i: number = 2;
  while (nearest[nearest.length - 1] < n) {
    nearest.push(i * i);
    i++;
  }

  const reversedNearest = nearest.reverse();
  const [nearestAfter, nearestBefore] = reversedNearest;
  return Math.abs(nearestAfter - n) < Math.abs(nearestBefore - n) ? nearestAfter : nearestBefore;
}

console.log(nearestSq(1));
console.log(nearestSq(111)); // 121
console.log(nearestSq(9999));
console.log(nearestSq(10));