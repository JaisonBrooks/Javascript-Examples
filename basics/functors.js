// Functors - are objects that have a map method. Promises and Arrays and plenty more.

  let stringFunctor = (value, fn) => {
    var chars = value.split('')
    return chars.map((char) => {
      return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join('')
  }

  let plus = (value) => value + 1
  let minus = (value) => value - 1

console.log(stringFunctor('ABC', plus))
console.log(stringFunctor('XYZ', minus))


// Tests
if (stringFunctor('ABC', plus) === 'BCD') {
  console.log('Test happy path: 1');
}
if (stringFunctor('ABC', minus) !== 'BCD') {
  console.log('Test happy path: 2')
}


// More Examples
const dragons = [
  {name: 'Bob jones', health: 70},
  {name: 'Bob sue', health: 90},
  {name: 'ron dragons', health: 140},
]
const names = dragons.map((dragon, i) => dragon.name)
console.log(names);
