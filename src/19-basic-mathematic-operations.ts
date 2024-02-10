export function basicOp(operation: string, value1: number, value2: number): number {
  if (!operation) return 0;

  let count: number = 0;
  switch (operation) {
    case "+":
      count = value1 + value2;
      break;
    case "-":
      count = value1 - value2;
      break;
    case "*":
      count = value1 * value2;
      break;
    case "/":
      count = value1 / value2;
      break;
  }
  return count;
}