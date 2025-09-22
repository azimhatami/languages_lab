type myType<T> = T extends number ? number : any;

const brand: myType<string> = '3zb';
const year: myType<number> = 2020;

// console.log(typeof brand);
// console.log(typeof year);


type NumberFromType<T> = T extends number[] ? number : never;

let n: NumberFromType<number>; // number	
let n: NumberFromType<string>; // never

// Infer
type StringOrNumberFromType<T> = T extends (infer R)[] ? R : never;

let num: StringOrNumberFromType<number>;
