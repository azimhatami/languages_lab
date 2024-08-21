
function calculateDiscount(totalPrice) {
  const discountPerPrice = 10;
  const minPrice = 100;
  const discountSteps = 3;
  const maxDiscount = 25;
  
  if (totalPrice < minPrice + discountPerPrice) {
    return 'No discount';
  }

  const discount = Math.floor((totalPrice - minPrice) / discountPerPrice) * discountSteps;

  if (discount > maxDiscount) return `Max discount ${maxDiscount}`;
  return discount;

};

console.log(calculateDiscount(109));
console.log(calculateDiscount(110));
console.log(calculateDiscount(120));
console.log(calculateDiscount(130));
console.log(calculateDiscount(140));
console.log(calculateDiscount(200));
