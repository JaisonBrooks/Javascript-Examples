var animals = [
  {name: 'Bobby', species: 'rabbit'},
  {name: 'Sue', species: 'dog'},
  {name: 'Mouse', species: 'dog'},
  {name: 'Bella', species: 'cat'},
  {name: 'Syngha', species: 'dog'}
]
function getSpecies(species, animals) {
  return animals.filter( (animal) => animal.species === species)
}
var dogs = getSpecies('dog')
var non_dogs = animals.filter( (animal) => animal.species !== 'dog')
console.log(getSpecies('dog', animals));
console.log(non_dogs);
