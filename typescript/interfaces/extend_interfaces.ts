interface Mailable {
	send(email: string): boolean
	queue(email: string): boolean
}

interface FutureMailabe extends Mailable {
	later(email: string, after: number): boolean
}

class Mail implements FutureMailabe {
	later(email: string, after: number): boolean {
		console.log(`Sent email to ${email} after ${after} ms.`);
		return true;
	}

	send(email: string): boolean {
		console.log(`Send an email to ${email}.`);
		return true;
	}

	queue(email: string): boolean {
		console.log(`Queue an email to ${email}.`);
		return true;
	}
}

// Extending multiple interfaces
// interface C {
// 	c(): void
// }
// 
// interface D extends B, C {
// 	d(): void
// }


// Interfaces extending classes
class Control {
	private state: boolean;
}

interface StatefulControl extends Control {
	enable(): void
}

class Button extends Control implements StatefulControl {
	enable() {}
}

class TextBox extends Control implements StatefulControl {
	enable() {}
}

class Label extends Control {}

// Error: cannot implement
class Chart implements StatefulControl {
	enable() {}
}

