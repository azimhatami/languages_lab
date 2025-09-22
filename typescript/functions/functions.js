// function add(a: number, b: number): number {
// 	return a + b;
// }
// 
// let sum = add(22, 3);
// console.log(sum);
var echo = function (message) {
    console.log(message.toUpperCase());
};
// echo('test');
var add = function (x, y) {
    return x + y;
};
// console.log(add(3, 8));
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// console.log(multiply(2, 3)); // 6
// console.log(multiply(2, 3, 4)); // 24
// Rest parameters
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
// console.log(getTotal(2, 3, 8)); // 13
// console.log(getTotal()); // 0
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    var str = '';
    args.forEach(function (arg) {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            str += arg;
        }
    });
    return [total, str];
}
var _a = combine(3, 'Happy', 2, 1, ' New Year'), total = _a[0], str = _a[1];
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
// console.log(sum(2, 8)); // 10
console.log(sum(2, 8, 1)); // 11
