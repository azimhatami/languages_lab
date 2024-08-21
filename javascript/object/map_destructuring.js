// Map: object and key, value


const user = new Map();

// set
// console.log(user.set('name', 'Azim'));


// chain set
user.set('email', 'user@test.com').set(true, 'Ok Admin').set('role', 'ADMIN');

// console.log(user);


// get data
// console.log(user.get('name'));


// check exist data
// console.log(user.has('name'));


// delete
// user.delete('email');
// console.log(user);

// clear
// user.clear()
// console.log(user);


const john = { name: 'John Doe' },
      lily = { name: 'Lily Bush' },
      ali = { name: 'Ali Hatami' },
      zahra = { name: 'Zahra Hatami' },
      peter = { name: 'Peter Drucker' };

// const userRoles = new Map();
// userRoles.set(john, 'admin').set(lily, 'editor').set(peter, 'subscriber');

// console.log(userRoles);
// console.log(userRoles.get(john));


const userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [ali, 'subscriber'],
  [zahra, 'editor'],
  [peter, 'subscriber'],
]);

// console.log(userRoles);
// console.log(userRoles.get(lily));

// for (const user of userRoles.keys()) {
//   console.log(user.name)
// }

// for (const role of userRoles.values()) {
//   console.log(role)
// }

// for (const [user, role] of userRoles.entries()) {
//   console.log(user.name, role);
// }


// Convert map keys to a array
// console.log([...userRoles.keys()]);

// Convert map values to a array
// console.log([...userRoles.values()]);

// array of object
// const users = [
//   { name: 'Azim', age: 28 },
//   { name: 'Ali', age: 18 },
//   { name: 'Mmd', age: 24 },
// ]



const uniqueUser = [...new Set(userRoles.values())];
console.log(uniqueUser);
