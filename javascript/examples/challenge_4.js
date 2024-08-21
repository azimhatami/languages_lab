// FizzBuzz : number -> 3 : Fizz, 5 : Buzz, 3 & 5 -> FizzBuzz

function fizzBuzz(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return `${number} -> FizzBuzz`;
  };
  if (number % 3 === 0) {
    return `${number} -> Fizz`;
  };
  if (number % 5 === 0) {
    return `${number} -> Buzz`;
  };
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

// for (i = 1; i <= 50; i++) {
//   if ((i % 3 === 0) & (i % 5 === 0)) {
//     console.log(`${i} -> FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} -> Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} -> Buzz`);
//   };
// }
