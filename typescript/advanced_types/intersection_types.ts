interface BusinessPartner {
	name: string;
	credit: number;
}

interface Identity {
	id: number;
	name: string;
}

interface Contact {
	email: string;
	phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
	id: 100,
	name: 'Joe',
	email: 'joe22@gmail.com',
	phone: '992-183-2371'
	
}

let c: Customer = {
	name: 'Alex',
	credit: 1_000_000,
	email: 'alexjh@gmail.com',
	phone: '119-222-3018'
}
