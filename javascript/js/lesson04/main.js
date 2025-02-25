// Array
// dash stack ui figma

let arr = new Array(1, 'test', true);
let arr2 = ['ali', 'mmd', 'num', 'test', 'admin', 'reza'];
let test = [1, 2, 3, 4];
let test2 = [5, 6, 7, 8];
// console.log(arr2);

// arr2.push('titi')
// arr2.pop()
// console.log(arr2.pop());
// console.log(arr2);

// console.log(arr.at(2));

// for (let index = 0; index < arr2.length; index++) {
//   console.log(arr2[index]);
// }

// for (let name of arr2) {
//   console.log(name)
// }

// console.log(arr2.includes('mr'));

// arr2.splice(1, 2)
// arr2.splice(arr2.length / 2, 0, 'a', 'b')
// arr2.splice(2, 0)

// arr2.slice(2)

// console.log(arr2.slice(0, 2))

// console.log(test.concat(test2))

// console.log(arr2.indexOf('reza'))
// console.log(arr2.some(item => item == 'alll'))
// console.log(arr2.every(item => item.length > 2))

// console.log(arr2.findIndex((item) => item.length > 3));

// let newArr = arr2.map((item, index) => console.log(index, item));

const nums = [2, 4, 6, 8, 10];

const sumNums = nums.reduce((acc, current) => {
  return acc + current;
}, 0)

console.log(sumNums);

