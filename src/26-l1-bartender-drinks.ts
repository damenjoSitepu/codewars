export function getDrinkByProfession(profession: string): string {
  if (!profession) return "";

  let s: string = '';

  switch (profession.toLowerCase()) {
    case "jabroni":
      s += 'Patron Tequila';
      break;
    case "school counselor":
      s += "Anything with Alcohol";
      break;
    case "programmer":
      s += "Hipster Craft Beer";
      break;
    case "bike gang member":
      s += "Moonshine";
      break;
    case "politician":
      s += "Your tax dollars";
      break;
    case "rapper":
      s += "Cristal";
      break;
    default:
      s += "Beer";
      break;
  }
  return s;
}

console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("bike ganG member"));


