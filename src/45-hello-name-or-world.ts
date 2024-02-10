export function hello(name = ''): string {
  if (!name) return 'Hello, World!';
  
  return `Hello, ${name[0].toUpperCase() + name.toLowerCase().substring(1, name.length)}!`;
}

console.log(hello('johN'));