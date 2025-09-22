// Primitive types
type Name = string;

let firstName: Name;
let lastName: Name;

firstName = 'Test';

console.log(firstName);

// Object types
type Person = {
	name: string;
	age: number;
};

type Contact = {
	email: string;
	phone: string;
};

let person: Person = {
	name: 'John',
	age: 25
};

console.log(person);

// Union Types
type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error

// Intersection Types
type Condidate = Person & Contact;
let condidate: Condidate = {
	name: 'Joe',
	age: 25,
	email: 'joe@example.com',
	phone: '000000000000'
};

console.log(condidate);
