// Closure: combination of a function bundled with its lexical environment.

// function loginCount () {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }
// 
// console.log(loginCount()); // 1
// console.log(loginCount()); // 1
// console.log(loginCount()); // 1

//! PERSISTENCY

// let counter = 0;
// 
// function loginCount () {
//   counter++;
//   return counter;
// }
// 
// function signUpCount () {
//   counter++;
//   return counter;
// }
// 
// console.log(loginCount()); // 1
// console.log(loginCount()); // 2
// console.log(loginCount()); // 3
// 
// console.log(signUpCount()); // 4
// console.log(signUpCount()); // 5
// console.log(signUpCount()); // 6

//! ENCAPSULATING


// CLOSURE :

function CounterReq () {
  let counter = 0;
  return function inner () {
    counter++;
    return counter;
  };
}

const loginReqs = CounterReq();

console.log(loginReqs()); // 1
console.log(loginReqs()); // 2
console.log(loginReqs()); // 3


const signUpReqs = CounterReq();

console.log(signUpReqs()); // 1
console.log(signUpReqs()); // 2
console.log(signUpReqs()); // 3
