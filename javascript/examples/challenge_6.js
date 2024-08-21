// funciton -> discount: 1, other: price
// getTotalPrice(0.3, 1, 2, 12, 23, 44)

function getTotalPrice(discount, ...prices) {
  let totalPrice = 0;
  for (let item of prices) {
    totalPrice += item;
  }

  return totalPrice * (1 - discount);
}

console.log(getTotalPrice(0.3, 30, 8, 2, 60));
