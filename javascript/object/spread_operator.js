// spread operator : ...

const arr = [4, 5];

const arr2 = [1, 2, 3, ...arr];

// console.log(arr2);

// pass all array index as arguments:
const a = [1, 2, 3, 4, 5];

// console.log(...a);

// push items to array
const tags = ['frontend', 'backend', 'web developer'];
const newTags = [...tags, 'Full Stack'];
// console.log(newTags);

// copy
const ar = ['a', 'b', 'c'];
// console.log(ar);
const newAr = [...ar, 'd', 'e']; // shallow copy
// console.log(newAr);

// join
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
// console.log([...arrayOne, ...arrayTwo]);


// string

const str = 'Azim';

// console.log(...str);
// console.log(...str, 'H');
// console.log([...str, 'H']);


// object
const user = {
  name: 'Azim',
  id: 1,
  email: 'azim@test.com',
}

// add key value to object
console.log({...user, email: 'user@test.com'});
// console.log(user);

// copy -> clone - object.assign() - ...
const newUser = {...user}
newUser.email = 'user@test.doc';
console.log(newUser);


