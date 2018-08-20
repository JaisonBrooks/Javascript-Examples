const fetch = require('node-fetch')
const orderTotal = require('./order-total')

const result = orderTotal(fetch, process, {
  country: 'DE',
  items: [
    {'name': 'Dragon', price: 20, quantity: 2}
  ]
})


// const result =
//   fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    // headers: {
    //   'apikey': ''
    // }
//   })
// .then(response => response.json())
// .then(data => data.rates.standard.value)
// .catch(err => console.log(err)) // Yell at me

result
