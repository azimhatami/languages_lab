// interface interfaceName<T> {
	//...
// }

interface Pair<K, V> {
	key: K;
	value: V
}

let month: Pair<string, number> = {
	key: 'Jhon',
	value: 1
}

// console.log(month);

// Generic interfaces that describe methods
interface Collection<T> {
	add(o: T): void;
	remove(o: T): void;
}

class List<T> implements Collection<T> {
	private items: T[] = [];

	add(o: T): void {
		this.items.push(o);
	}

	remove(o: T): void {
		let index = this.items.indexOf(o);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
	list.add(i);
}

// console.log(list); // List { items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }

interface Options<T> {
	[name: string]: T
}

let inputOptions: Options<boolean> = {
	'disabled': false,
	'visible': true
};

console.log(inputOptions);
