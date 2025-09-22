// TypeScript Generics

function getRandomNumber(items: number[]): number {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

// let numbers = [2, 8, 21, 3, 1, 16];
// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

let colors = ['red', 'green', 'blue'];
// console.log(getRandomString(colors));

// Using any type
function getRandomAnyElement(items: any[]): any {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

// console.log(getRandomAnyElement(numbers));
// console.log(getRandomAnyElement(colors));

function getRandomElement<T>(items: T[]): T {
	let randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

// console.log(getRandomElement<number>(numbers))
// console.log(typeof getRandomElement<number>(numbers)) // number

// console.log(getRandomElement<string>(colors))
// console.log(typeof getRandomElement<string>(colors)) // string

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
	return {
		...obj1, 
		...obj2
	};
}

let result = merge(
	{ name: 'John' },
	// { jobTitle: 'Frontend Developer' },
	{ age: 22 }
	// 22 // Error
);

// console.log(result);
// console.log(typeof result);


function prop<T, K extends keyof T>(obj: T, key: K) {

	return obj[key];
}

let str = prop({ name: 'Azim' }, 'name');
// let str = prop({ name: 'Azim' }, 'age'); // Error

// console.log(str);


// TypeScript generic classes
// class className<T>{
	//... 
// }

// class className<T, U>{
	//... 
// }

// class className<T extends TypeA>{
	//... 
// }

class Stack<T> {
	private elements : T[] = [];

	constructor(private size: number) {}

	isEmpty(): boolean {
		return this.elements.length === 0;
	}

	isFull(): boolean {
		return this.elements.length === this.size;
	}

	push(element: T): void {
		if (this.elements.length === this.size) {
			throw new Error('The stack is overflow!');
		}
		this.elements.push(element);
	}

	pop(): T {
		if (this.elements.length === 0) {
			throw new Error('The stack is empty!');
		}
		return this.elements.pop();
	}
}


function randBetween(low: number, high: number): number {
	return Math.floor(Math.random() * (high - low + 1) + low)
}

let numbers = new Stack<number>(5);

// console.log(numbers);


// while (!numbers.isFull()) {
// 	let n = randBetween(1, 10);
// 	console.log(`Push ${n} into the stack.`)
// 	numbers.push(n)
// }
// 
// while (!numbers.isEmpty()) {
// 	let n = numbers.pop();
// 	console.log(`Pop ${n} from the stack.`);
// }

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word))
while (!wordStack.isEmpty()) {
	console.log(wordStack.pop())
}
