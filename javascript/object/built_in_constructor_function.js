const strLit = 'Azim'; // string literal
const strObj = new String('Azim');
console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

const numLit = 23; // number literal
const numObj = new Number(23);
console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);
console.log(numObj instanceof Number)
console.log(numLit instanceof Number)

const booleanLit = true; // boolean literal
const booleanObj = new Boolean(true);
console.log(booleanLit, typeof booleanLit);
console.log(booleanObj, typeof booleanObj);

const arrayLit = ['A', 'B', 'C']; // array literal
const arrayObj = new Array(['A', 'B', 'C']);
console.log(arrayLit, typeof arrayLit);
console.log(arrayObj, typeof arrayObj);
