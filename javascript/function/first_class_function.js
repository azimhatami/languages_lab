// First-class function & Higher-order function & Callback function

// first-class function : function are treated like any other variable.
// higher-order function  or HOF : A function that returns a function or takes other functions as arguments is called a higher-order function (abstraction).
// callback function : we pass as an argument to another function.


function sayHi() {
  return 'Hi,';
}

function sayHello() {
  return 'Hello,';
}


function greeting(name, func) {
  return `The function name is: ${func.name} - return: ${func()} ${name}`;
}


console.log(greeting('Azim', sayHi));
// console.log(greeting('Azim', () => {})); // callback function
console.log(greeting('Azim', sayHello));


function newGreeting(str) {
  return function (name) {
    return `${str} ${name}`;
  }
}

// const newGreeting = (str) => (name) => `${str} ${name}`;

const fun = newGreeting('Hi,')('azim');
// console.log(fun('azim'));
console.log(fun);


// higher-order function (HOF) usage
// [2, 4, 6] => [4, 6, 8]

function incArray(data, num = 2) {
  const newArray = [];
  for (const i of data) {
    newArray.push(i + num);
  }

  return newArray;
}

// console.log(incArray([2, 4, 6], 2));


// higher-order function (HOF) usage
arrayData = [2, 4, 6];

function operationOnArray(data, callback, num = 2) {
  const newArray = [];
  for (const item of data) {
    newArray.push(callback(item, num))
  }

  return newArray;
}

function inc(item, num) {
  return item + num;
}

function dec(item, num) {
  return item - num;
}

function mul(item, num) {
  return item * num;
}

console.log(operationOnArray(arrayData, inc, 2));
console.log(operationOnArray(arrayData, dec, 2));
console.log(operationOnArray(arrayData, mul, 2));

