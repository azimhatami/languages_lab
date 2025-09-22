let counter = 0;

while (counter < 5) {
	// console.log(counter);
	counter++;
}

// let list = document.querySelector('#list');

// while (list.firstChild) {
// 	list.removeChild(list.firstChild);
// }

let i = 0

do {
	// console.log(i);
	i++
} while (i < 10);

let index = 9;
let count = 0;

do {
	index += 1;

	if (index % 2)
		continue;

	count += 1;
} while (index < 29);

console.log(count);
