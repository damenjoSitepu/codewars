  export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    const classAverage: number = classPoints.reduce((acc: number, val: number) => acc + val, 0) / classPoints.length;
    return classAverage < yourPoints;
  }

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));