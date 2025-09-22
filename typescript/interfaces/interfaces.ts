// Introduction to typescript inerfaces

interface Person {
	readonly ssn: string;
	firstName: string;
	middleName?: string;
	lastName: string
}

function getFullName(person: Person): string {
	if (person.middleName) {
		return `Full name: ${person.firstName} ${person.lastName} \nMiddle name: ${person.middleName} \nssn: ${person.ssn}`;
	}
	return `Full name: ${person.firstName} ${person.lastName} \nssn: ${person.ssn}`;
}

// let person: Person = {
// 	firstName: 'Sara',
// 	lastName: 'Rad',
// 	ssn: '171-28-0926'
// };

// person.ssn = '172-27-2943'; // Error: read-only

// function getFullName({firstName, lastName}: Person): string {
// 	return `${firstName} ${lastName}`;
// }

// let jane = {
// 	firstName: 'Jane',
// 	lastName: 'Doe',
// 	middleName: 'k.',
// 	age: 22
// };

// console.log(getFullName(person)); // Sara Rad
// console.log(getFullName(jane)); // Jane Doe

interface StringFormat {
	(str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
	return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

// console.log(format('hi', true)); // HI
// console.log(format('Azim', false)); // azim

let lowerCase: StringFormat;
lowerCase = function (str: string): string {
	return str.toLowerCase();
}

// console.log(lowerCase('HI', false)) // hi | function compatibility


interface Json {
	toJson(): string;
}

class Person implements Json {
	private _firstName: string;
	private _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	toJson(): string {
		// return JSON.stringify(this);
		return JSON.stringify({
			firstName: this._firstName,
			lastName: this._lastName
		});
	}
}

let p = new Person('Azim', 'Hatami');
console.log(p.toJson());
