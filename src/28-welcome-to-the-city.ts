export const sayHello = (name: string[], city: string, state: string):string => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Hello, John Smith! Welcome to Phoenix, Arizona!
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));