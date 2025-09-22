class Person {
	private _age: number;
	private _firstName: string;
	private _lastName: string;

	constructor(age: number, firstName: string, lastName: string) {
		this._age = age;
		this._firstName = firstName;
		this._lastName = lastName;
	}

	public get age() {
		return this._age;
	}

	public set age(theAge: number) {
		if (theAge <= 0 || theAge >= 200) {
			throw new Error('The age is invalid');
		}
		this._age = theAge;
	}

	public getFullName() {
		return `${this._firstName} ${this._lastName}`;
	}
}

const p = new Person(21, 'Azim', 'Hatami');
console.log(p);
console.log(p.age); // 21 (getter)
p.age = 30;
console.log(p.age);
console.log(p.getFullName()) // 'Azim Hatami'
