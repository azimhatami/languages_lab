function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// console.log(add(true, false));
console.log(add(2, 7)); // 9
console.log(add('He', 'llo')); // Hello
var result;
result = 10; // OK
result = 'Hi'; // also OK
// result = false; // a boolean value, not OK
