let username: string = 'Ali';
let age: number = 25;
let active: boolean = true;

let names: string[] = ['Test', 'Jhon', 'Mmd', 'Zahra'];

let person: {
	name: string;
	age: number;
};

person = {
	name: 'Hamid',
	age: 21,
};


// Function
let greeting: (name: string) => string;

greeting = function (name: string) {
	return `Hi ${name}`
}

// console.log(greeting('Azim'))
// console.log(greeting(username));

let text: string = `This is a multi-line text
next line
after`

// console.log(text);

let employee: {
	firstName: string;
	lastName: string;
	age: number;
	jobTitle: string;
};

employee = {
	firstName: 'Jhon',
	lastName: 'Doe',
	age: 25,
	jobTitle: 'web Developer'
}

// console.log(employee);

let obj: Object = 43;

// console.log(obj.toString());

let skills: string[] = [];
// let skills: Array<string> = [];

skills[0] = 'Problem Solving';
skills[1] = 'Programming';

skills.push('Software Design');

// console.log(skills);
let skill = skills[0];
// console.log(typeof skill);

let nums = [1, 2, 3];
let doubleIt = nums.map(n => n * 2 )
// console.log(typeof nums);
// console.log('Length:', nums.length);
// console.log(doubleIt);

let scors: (string | number)[];
scors = ['Programming', 5, 'Software Design', 4];

// console.log(Array.isArray(scors));

let result: unknown;

result = [1, 2, 3];

const total = (result as number[]).reduce((a: number, b: number) => a + b, 1);

console.log(total);

