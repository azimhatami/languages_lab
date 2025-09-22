class Employee {
	private static headcount: number = 0;

	constructor(
		private firstName: string,
		private lastName: string,
		private jobTitle: string) {

		Employee.headcount++;
	}

	static getHeadcount() {
		return Employee.headcount;
	}
}

let emp1 = new Employee('Ali', 'Hatami', 'Front-end Developer');
let emp2 = new Employee('Mahsa', 'Hatami', 'UI/UX');

// console.log(Employee.headcount); // 2
console.log(Employee.getHeadcount()); // 2
