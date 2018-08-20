const orderTotal = require('./order-total')

const emptyFunction = () => {
}
// Sanity Test //
it('works', () =>
  expect(1).toBe(1))

it('calls vat api.com correctly', () => {
  let isFakeFetchCalled = false
  let country_code = 'DE'
  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code='+ country_code)
    isFakeFetchCalled = true
  }
  orderTotal(fakeFetch, {
    country: country_code,
    items: [
      { 'name': 'Dragon waffles', price: 20, quantity: 2 }
    ]
  }).then(result => {
    expect(isFakeFetchCalled).toBe(true)
  })
})

it('if country code specified', () => {
  
})

it('quantity', () =>
  orderTotal(emptyFunction, {
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  }).then(result => expect(result).toBe(6)))

it('no quantity', () =>
  orderTotal(emptyFunction, {
    items: [
      { 'name': 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3)))

it('happy path (1)', () =>
  orderTotal(emptyFunction, {
      items: [
        { name: 'Dragon food', price: 8, quantity: 1 },
        { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
      ]
    }).then(result => expect(result).toBe(808)))

it('happy path (2)', () =>
  orderTotal(emptyFunction, {
      items: [
        { name: 'Dragon collar', price: 20, quantity: 1 },
        { name: 'Dragon chew toy',  price: 40, quantity: 1 }
      ]
    }).then(result => expect(result).toBe(60)))
