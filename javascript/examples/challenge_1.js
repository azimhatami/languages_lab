// Challenge: 1
// a, b -> swap variable value

// let A = 'blue', B = 'red';
// [A, B] = [B, A];

// console.log(A, B)

// let A = 'blue', B = 'red';
// 
// let C = A;
// 
// A = B;
// B = C;
//  
// console.log(A, B)


let a = 1, b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a is now:', a);
console.log('b is now:', b);
