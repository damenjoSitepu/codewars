export const leo = (oscar: number): string => {
  if (oscar > 88) return "Leo got one already!";
  if (![88, 86].includes(oscar) && oscar < 88) return "When will you give Leo an Oscar?";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  return "Leo finally won the oscar! Leo is happy";
}

console.log(leo(89));