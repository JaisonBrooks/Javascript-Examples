var animals = [
  {name: 'Bobby', species: 'rabbit'},
  {name: 'Sue', species: 'dog'},
  {name: 'Mouse', species: 'dog'},
  {name: 'Bella', species: 'cat'},
  {name: 'Syngha', species: 'dog'}
]

var titles = animals.map((animal) => animal.name + " is a " + animal.species)
console.log(titles);
