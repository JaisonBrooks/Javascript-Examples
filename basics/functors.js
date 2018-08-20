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
