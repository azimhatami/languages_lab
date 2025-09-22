abstract class Employee {
	constructor(
		private firstName: string, 
		private lastName: string) {}

		abstract getSalary(): number;

		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		compensationStatement(): string {
			return `${this.fullName} makes ${this.getSalary()} a month.`;
		}
}


class FullTimeEmployee extends Employee {
	constructor(firstName: string, 
				lastName: string, 
				private salary: number) {
					super(firstName, lastName);
				}
	getSalary(): number {
		return this.salary;
	}
}

class Contractor extends Employee {
	constructor(
		firstName: string, 
		lastName: string, 
		private rate: number, 
		private hours: number) {
			super(firstName, lastName);
		}

	getSalary() {
		return this.rate * this.hours;
	}
}

let hamed = new	FullTimeEmployee('Hamed', 'Ervani', 12000);
let abol = new Contractor('Abol', 'Hatami', 100, 160);

console.log(hamed.compensationStatement());
console.log(abol.compensationStatement());
