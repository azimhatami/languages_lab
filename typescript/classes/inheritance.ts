class Person {
	private firstName;
	private lastName
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	describe(): string {
		return `This is ${this.firstName} ${this.lastName}`;
	}
}

class Employee extends Person {
	private jobTitle;
	constructor(firstName: string, lastName: string, jobTitle: string) {
		super(firstName, lastName);

		this.jobTitle = jobTitle;
	}

	describe(): string {
		return super.describe() + `, I'm a ${this.jobTitle}.`;
	}
}

let emp = new Employee('Ftm', 'Zamani', 'Front-end Developer');

console.log(emp.describe());
console.log(emp.getFullName());
