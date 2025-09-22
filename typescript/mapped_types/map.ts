type Position = 'Developer' | 'Manager' | 'Designer';

// normal
type PositionDuties = {
	Developer: string[],
	Designer: string[],
	Manager: string[]
};

// mapped
type PositionDutiesMap = {
	[p in Position]: string[]
}

type PositionDutiesMapGeneric<T extends string> = {
	[key in T]: string[]
}

let x: PositionDutiesMapGeneric<Position>;
// x.Manager = [''];
// x.Manager = [5]; // Error
// x.Manager = 2; // Error

type Employee = {
	name: string,
	age: number
};

// Key Remapping
type Company<T> = {
	[key in keyof T as `company${Capitalize<string & key>}`]: T[key]
}

type companyEmployee = Company<Employee>;

function cls(per: companyEmployee, p: keyof companyEmployee) {
	console.log(`${p}: ${per[p]}`);
}

let user: companyEmployee = {
	companyName: 'ali',
	companyAge: 22
};

cls(user, 'companyName');
