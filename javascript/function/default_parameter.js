// Default parameter

function clacOffPrice (numbers, dis = 0.3) {
  // dis = dis || 0.3 // short - circuting
  let total = 0;
  for (const num of numbers) {
    total += num
  }

  return total * (1 - dis);
}

console.log(clacOffPrice([10, 20, 70]));
