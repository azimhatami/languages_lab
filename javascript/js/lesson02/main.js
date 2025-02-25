// for loop

// for(let num = 0; num <= 30; num++) {
//   if (num % 2 === 0) {
//     console.log(num)
//   }
// }


// let input = 10;
// 
// for(let num = 0; num <= input; num++) {
//   if (input % num === 0) {
//     console.log(num);
//   }
// }

let input = 28;
let temp = 0

for(let count = 0; count < input; count++) {
  if (input % count == 0) {
    temp += count
  }
}

if (temp == input) {
  console.log('Perfect Number: ', temp);
} 
