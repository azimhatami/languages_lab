type Shape = 'circle' | 'squara' | 'be';

function getArea(shape: Shape): number {
	switch (shape) {
		case 'circle':
			return 3.14;
		case 'squara':
			return 4;
		default:
			const _exhaustive: never = shape;
			throw new Error(`Unknown shape: ${_exhaustive}`);
	}
}

console.log(getArea('circle')); // valid
console.log(getArea('be')); // error
// console.log(getArea('test'));
