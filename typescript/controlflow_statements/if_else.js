var max = 100;
var counter = 0;
if (counter < max) {
    counter++;
}
// console.log(counter); // 1
// Ternary operator
var foo = 220;
var bar = 30;
bar > foo ? console.log('OK!!!') : console.log('NO!!!'); // NO
var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
}
else {
    discount = 15; // 15% discount
}
console.log("You got ".concat(discount, "% discount"));
