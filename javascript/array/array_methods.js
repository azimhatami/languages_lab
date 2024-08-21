// Array methods

// const arr = ['A', 'B', 'C', 'D'];
// console.log(arr[1]);

// length:
// console.log(arr.length);


// push: add element to end of array.
// arr.push('E');
// console.log(arr);


// pop: remove element from end of array.
// console.log(arr.pop());
// console.log(arr);

// unshift: add element to first of array.
// console.log(arr.unshift('AA'));
// console.log(arr);

// shift: remove element to first of array.
// console.log(arr.shift('AA'));
// console.log(arr);


// indexOf
// console.log(arr.indexOf('AA')); // -1
// console.log(arr.indexOf('C')); // 2

// includes
// console.log(arr.includes('c')); // false
// console.log(arr.includes('C')); // true


// slice: NTO MUTATE
// console.log(arr.slice()); // ['A', 'B', 'C', 'D']
// console.log([...arr]); // ['A', 'B', 'C', 'D']
// console.log(arr.slice(1)); // ['B', 'C', 'D']
// console.log(arr.slice(1, 3)); // ['B', 'C']


// splice(start, deleteCoune, item1, item2, itemN) : MUTATE
// console.log(arr.splice(1)); // ['B', 'C', 'D']
// console.log(arr); // ['A']
// console.log(arr.splice(1, 2)); // ['B', 'C']
// console.log(arr); // ['A', 'D']
// console.log(arr.splice(1, 2, 'BB', 'CC')); // ['B', 'C']
// console.log(arr); // ['A', 'BB', 'CC', 'D']


// reverse
// console.log(arr.reverse());


// join
// console.log(arr.join('-'));


// concat : NOT MUTATE
// const arr2 = ['E', 'F'];
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);
// console.log(arr);


// at
// console.log(arr.at(0));


// foreach: loop on array, Map, Set
// const courses = ['React.js', 'Vue.js', 'Next.js', 'Node.js'];

// for of VS forEach !

// for (const item of courses) {
//   console.log(item);
// }

// let newCourses = [];

// courses.forEach((course, index) => {
//   newCourses.push({
//     id: index + 1,
//     title: course
//   });
//   console.log(course, index);
// });

// console.log(newCourses);


// Transforming Array: map, filter, reduce

// map:
const users = [
  {
    id: 1,
    isActive: true,
    role: 'ADMIN',
    age: 34,
    name: 'Mike',
    score: 2,
  },
  {
    id: 2,
    isActive: false,
    role: 'TEACHER',
    age: 22,
    name: 'Ali',
    score: 4,
  },
  {
    id: 3,
    isActive: true,
    role: 'User',
    age: 18,
    name: 'Mahdi',
    score: 6,
  },
];


const userIds = users.map(({id}) => {
  return {id};
});

// console.log(userIds); // return: [ { id: 1 }, { id: 2 }, { id: 3 }]

const newUsers = users.map((user) => {
  return { 
    ...user,
    msg: `Hi ${user.name}, Your profile is ${
      user.isActive ? 'Activated' : 'Not Activated'
    }, and your role is ${user.role}`,
  };
});

// console.log(newUsers);


// filter: NOT MUTATE! -> satisfy a condition?
const activedUsers = users.filter((user) => {
  return user.isActive;
});

// console.log(activedUsers);

const id = 1;
const deleteUser = users.filter((user) => {
  return user.id !== id;
});

// console.log(deleteUser);


function delUserById (users, id) {
  return users.filter((user) => {
    return user.id !== id;
  });
};

// console.log(delUserById(users, 1));


// reduce
// initialValue = 0
const totalScore = users.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.score
}, 0);

// console.log(totalScore);


const products = [
  {
    id: 1,
    title: 'p-1',
    price: '88.91$',
    quantity: 1,
  },
  {
    id: 2,
    title: 'p-2',
    price: '72.18$',
    quantity: 3,
  },
  {
    id: 3,
    title: 'p-3',
    price: '67$',
    quantity: 6,
  },
  {
    id: 4,
    title: 'p-4',
    price: '45$',
    quantity: 2,
  },
];

const totalPrice = products.reduce((accumulator, currentValue) => {
  const price = Number(currentValue.price.split('$')[0]) * currentValue.quantity;
  return accumulator + price;
}, 0);

// console.log(totalPrice);


// find method :

const product = products.find((product) => {
  return product.title === 'p-1';
  // return product.quantity === 3;
});

// console.log(product);

// findIndex

userMarks = [15, 10, 20, 7];

// console.log(userMarks.indexOf(20));
const productIndex = products.findIndex((product) => product.title === 'p-1')
// console.log(productIndex);

// challenge : remove a product ? based on p.id
function productDelete(products, id) {
  const productDel = products.filter((p) => {
    return p.id !== id;
  });

  return productDel;
}

// console.log(productDelete(products, 3));

function productDelete2(products, id) {
  const cloneProducts = [...products];
  const productIndex = cloneProducts.findIndex((product) => product.id === id);
  cloneProducts.splice(productIndex, 1);
  return cloneProducts;
}

// console.log(productDelete2(products, 3));


// some and every methods

// console.log(users.some(u => u.isActive)); // true
// console.log(users.every(u => u.isActive)); // true false

const enrolledCourses = [7];

const carts = [
  {
    id: 1,
    title: 'c-1',
    price: 63
  },
  {
    id: 2,
    title: 'c-2',
    price: 48
  },
  {
    id: 3,
    title: 'c-3',
    price: 82
  },
  {
    id: 4,
    title: 'c-4',
    price: 39
  },
];

function checkAlreadyEnrolled(carts, enrolledCourses) {
  const cartCourseIds = carts.map((c) => c.id);
  const found = enrolledCourses.some((id) => cartCourseIds.includes(id));

  if (found) return 'You already registred in one of the courses in the cart'

  return 'Congrats! you successfully registered';
}

// console.log(checkAlreadyEnrolled(carts, enrolledCourses));


// sort method: MUTATE

const userNameList = ['Zahra', 'Azim', 'Mmd', 'Hadi'];
console.log(userNameList.sort());


const nums = [2, 4, 100, 9, 1,]

// Sort the numbers in ascending order
const ascendingNums = nums.sort((a, b) => {
  return a-b
});

console.log(ascendingNums);


// Sort the numbers in descending order
const descendingNums = nums.sort((a, b) => {
  return b-a
});

console.log(descendingNums);










