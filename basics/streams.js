// Streams - informations that needs to be processes item by item

// time based events
const stupidNumberStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 2000)
    setTimeout(() => callback(3), 3000)
  }
}
stupidNumberStream.each(console.log)
//



// file parsing
const fs = require('fs')
const highland = require('highland')
highland(fs.createReadStream('streams_data.csv', 'utf8'))
.split('')
.map(line => line.split(','))
.map(parts => ({
  name: parts[0],
  numPurchases: parts[1]
}))
.filter(customer => customer.numPurchases > 2)
.map(customer => customer.name)
.each(x => console.log('each: ' + JSON.stringify(x, null, 2)))

// checkout Bacon.js lib for stream event handling
