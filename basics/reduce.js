var fs = require('fs')

var amounts = [
  {amount: 50},
  {amount: 25},
  {amount: 15},
  {amount: 20}
]
var total = amounts.reduce((sum, order) => {
  return sum + order.amount
},0)
console.log(total);

// Load data and convert into json
var output = fs.readFileSync('./reduce_data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('  '))
.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  })
  return customers
}, {})
console.log(JSON.stringify(output, null, 2))
