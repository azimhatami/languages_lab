let result: any;

result = 1;
console.log(result);

result = 'Hello';
console.log(result);

result = [1, 2, 3];
const total = result.reduce((a: number, b: number) => a + b, 0)
console.log(total);

result = 10.123;
console.log(result.toFixed());
// result.willExist();
