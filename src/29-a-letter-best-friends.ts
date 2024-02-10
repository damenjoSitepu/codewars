export function bestFriend(txt: string, a: string, b: string): boolean {
  if (a === b || !txt) return false;

  for (let i = 0; i < txt.length; i++) {
    try {
      if (txt[i] === a && txt[i + 1] !== b) return false;
    } catch (e: any) {
      return false;
    }
  }
  return true;
}