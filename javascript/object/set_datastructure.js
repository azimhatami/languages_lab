// set: iterable data -> array, string

const myset = new Set([1, 2, 3, 3, 4, 4, 5]);

console.log(myset);

// size
console.log(myset.size);

// check -> has
console.log(myset.has(2));

// add
console.log(myset.add(8));

// delete
console.log(myset.delete(2));
console.log(myset);

// not get value in set

// clear
// myset.clear();
// console.log(myset);

// loop on set
// for (let item of myset) console.log(item);

// use case
const roles = ['ADMIN', 'ADMIN', 'TEACHER', 'EDITOR', 'CONTENT-MAMANGER'];

// create unique array
const setRoles = [...new Set(roles)];
console.log(setRoles);
console.log(new Set(roles).size);

// create unique string
console.log([...new Set('azim hatami')].join(''));
