export function mango(quantity: number, price: number): number{
  let q: number = Math.floor(quantity / 3);
  let s: number = quantity % 3;
  return (((q * 2) + s)) * price;
}

console.log(mango(9, 5));
console.log(mango(3, 3));
console.log(mango(5, 3));