const orderTotal = require('./order-total')
let key = '123'

// Sanity Test //

it('works', () =>
  expect(1).toBe(1))

it('calls vat api.com correctly', () => {
  let isFakeFetchCalled = false
  let country_code = 'DE'
  const fakeProcess = {
    env: {
      VAT_API_KEY: key
    }
  }
  const fakeFetch = (url, opts) => {
    expect(opts.headers.apikey).toBe(key)
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code='+ country_code)
    isFakeFetchCalled = true
    return Promise.resolve({
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19
          }
        }
      })
    })
  }
  return orderTotal(fakeFetch, fakeProcess, {
    country: country_code,
    items: [
      { 'name': 'Dragon waffles', price: 20, quantity: 2 }
    ]
  }).then(result => {
    expect(result).toBe(20 * 2 * 1.19)
    expect(isFakeFetchCalled).toBe(true)
  })
})

it('quantity', () =>
  orderTotal(null, null, {
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  }).then(result => expect(result).toBe(6)))

it('no quantity', () =>
  orderTotal(null, null, {
    items: [
      { 'name': 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3)))

it('happy path (1)', () =>
  orderTotal(null, null, {
      items: [
        { name: 'Dragon food', price: 8, quantity: 1 },
        { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
      ]
    }).then(result => expect(result).toBe(808)))

it('happy path (2)', () =>
  orderTotal(null, null, {
      items: [
        { name: 'Dragon collar', price: 20, quantity: 1 },
        { name: 'Dragon chew toy',  price: 40, quantity: 1 }
      ]
    }).then(result => expect(result).toBe(60)))
