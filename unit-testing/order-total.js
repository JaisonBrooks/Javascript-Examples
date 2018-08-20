// Tutorial - https://www.youtube.com/watch?v=XsFQEUP1MxI

function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

module.exports = orderTotal
