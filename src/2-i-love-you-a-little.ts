export function howMuchILoveYou(petals: number): string{
  const words: string[] = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  
  return words[petals % 6 === 0 ? words.length - 1 : (petals % 6) - 1];
}