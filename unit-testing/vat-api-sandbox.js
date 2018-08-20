const fetch = require('node-fetch')
const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
      'apikey': ''
    }
  })
.then(response => response.json())
.then(data => data.rates.standard.value)
.catch(err => console.log(err)) // I dont have an API key

result
