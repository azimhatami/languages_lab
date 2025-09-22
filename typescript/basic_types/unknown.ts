let result: unknown;

result = [1, 2, 3];

const total = (result as number[]).reduce((a: number, b: number) => a + b, 0)

// console.log(total);


function format(value: unknown): void {
	switch (typeof value) {
		case 'string':
			console.log('String:', value.toUpperCase());
			break;
		case 'number':
			console.log('Number:', value.toFixed(2));
			break;
		default:
			console.log('Other types:', value);
	}
}

format('typescript');
format(22.3849);
format(false);
