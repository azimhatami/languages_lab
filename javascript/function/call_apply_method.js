'use strict';

// call, apply, bind methods: 
// 1. To borrow another object's methods or
// 2. To create a custom value of this

// this -> object that all the method.

const user = {
  name: 'Azim',
  job: 'developer',
  birthYear: 1995,
  getYearOfBirth() {
    console.log(2023 - this.birthYear);
    // return 2023 - this.birthYear;
  },
  introduceUser(greeting, massage) {
    return `${greeting}, I'm, ${this.name}, a ${this.job}, My massage to the world ${massage}`;
  },
};

// console.log(user.getYearOfBirth());
// console.log(user.introduceUser('Hi', 'My massage'));

const guestUser = {
  name: 'Mmd',
  job: 'super market',
  birthYear: 1998,
}

const newGetYearOfBirth = user.getYearOfBirth;
const newIntroduceUser = user.introduceUser;

const params = ['Hi', 'Learn JS'];

// console.log(newGetYearOfBirth.call(guestUser)); // change this -> to guestUser
// console.log(newIntroduceUser.call(guestUser, 'Hi', 'My massage')); // change this -> to guestUser
// console.log(newIntroduceUser.call(guestUser, ...params)); // change this -> to guestUser

// console.log(newGetYearOfBirth.apply(guestUser)); // change this -> to guestUser
// console.log(newIntroduceUser.apply(guestUser, params)); // change this -> to guestUser


function sayHello(greeting) {
  return `${greeting}, ${this.name}`;
}

const testUser = {
  name: 'Test',
}
// console.log(sayHello.call(testUser, 'Hi'));


// bind
// const newIntroduceUserBind = newIntroduceUser.bind(guestUser); // change this -> to guestUser
// console.log(newIntroduceUserBind(...params))

// const newIntroduceUserBind2 = newIntroduceUser.bind(guestUser, 'Hello!'); // change this -> to guestUser
// console.log(newIntroduceUserBind2('Learn Js'))


// document.querySelector('.add-user').addEventListener('click', user.getYearOfBirth.bind(guestUser))


const counter = (count, number) => {
  return number + count;
}

console.log(counter(5, 4));

const countByFive = counter.bind(null, 5);
console.log(countByFive(4));


const countByFive2 = function (number) {
  return function (count) {
    return count + number;
  }
}

const countByFive3 = (number) => (count) => count + number;

console.log(countByFive2(2)(9));
console.log(countByFive3(17)(3));
// const func = countByFive2(4);
// console.log(func(6));
