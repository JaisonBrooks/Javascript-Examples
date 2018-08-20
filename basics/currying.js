// Currying //
let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'
console.log(dragon('bobby jones')('tiny')('lightening'))
let name = dragon('bobby jones')
let size = name('tiny')
let element = size('lightening')
console.log(element);


// more

let dragons = [
  {name: 'bob jones', element: 'fire'},
  {name: 'sue jones', element: 'lightening'},
  {name: 'catfish', element: 'lightening'},
  {name: 'dumbo', element: 'water'}
]
let hasElement = (element, obj) => obj.element === element
let lighteningDragons = dragons.filter(x => hasElement('lightening', x))
console.log(lighteningDragons);
