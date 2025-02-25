const user = {
  firstName: 'Azim',
  lastName: 'Hatami',
  ages: [2, 5, 8],
  func: function sayHello() {
    return `Hello ${this.firstName}`;
  },
};

user.role = 'user';
user['birthDay'] = '05/02/2025';

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.ages);
// console.log(user.func());
// console.log(user['birthDay']);


const codes = {
  '98': 'IRI',
  '44': 'UK',
  '1': 'USA'
};

// console.log('1' in codes);

// for (const code in codes) {
//   console.log(`+${code} : ${codes[code]}`);
// };

// const keys = Object.keys(user);
// console.log(keys);
const values = Object.values(user);
// console.log(values);

Object.defineProperty(user, 'key', {
  value: 'some value',
  configurable: true,
  enumerable: true,
  writable: false,
});

user.key = 'new value';

// console.log(user);

// Object.freeze(user);

// console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));


console.log(JSON.parse(JSON.stringify(user, null, 2)))
