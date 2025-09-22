enum Month {
	Jan,
	Feb,
	Mar,
	Apr,
	May,
	Jun,
	Jul,
	Aug,
	Sep,
	Oct,
	Nov,
	Dec,
};


function itIsSummer(month: Month): boolean {
	let isSummer: boolean;
	switch (month) {
		case Month.Jun:
		case Month.Jul:
		case Month.Aug:
			isSummer = true;
			break;
		default:
			isSummer = false;
			break;
	}

	return isSummer;
}


console.log(itIsSummer(Month.Jan)); // false
console.log(itIsSummer(Month.Jun)); // true
console.log(itIsSummer(7)); // true
console.log(itIsSummer(4)); // false

console.log(Month);
