// function add(a: number, b: number): number {
// 	return a + b;
// }
// 
// let sum = add(22, 3);

// console.log(sum);

let echo = (message: string): void => {
	console.log(message.toUpperCase());
}

// echo('test');

let add: (x: number, y: number) => number = function (x: number, y: number) {
	return x + y;
}

// console.log(add(3, 8));

function multiply(a: number, b: number, c?: number): number {
	if (typeof c !== 'undefined') {
		return a * b * c;
	}

	return a * b;
}

// console.log(multiply(2, 3)); // 6
// console.log(multiply(2, 3, 4)); // 24

// Rest parameters

function getTotal(...numbers: number[]): number {
	let total = 0;
	numbers.forEach((num) => total += num );
	return total;
}

// console.log(getTotal(2, 3, 8)); // 13
// console.log(getTotal()); // 0

function combine(...args: (number | string)[]): [number, string] {
	let total = 0;
	let str = '';

	args.forEach((arg) => {
		if (typeof arg === 'number') {
			total += arg;
		} else if (typeof arg === 'string') {
			str += arg;
		}
	});

	return [total, str];
}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');

// console.log({total});
// console.log({str});

// Method overloading

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
	if (c) return a + b + c;
	return a + b;
}

// console.log(sum(2, 8)); // 10
console.log(sum(2, 8, 1)); // 11


