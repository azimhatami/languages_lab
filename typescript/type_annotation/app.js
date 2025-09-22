var username = 'Ali';
var age = 25;
var active = true;
var names = ['Test', 'Jhon', 'Mmd', 'Zahra'];
var person;
person = {
    name: 'Hamid',
    age: 21,
};
// Function
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
// console.log(greeting('Azim'))
// console.log(greeting(username));
var text = "This is a multi-line text\nnext line\nafter";
// console.log(text);
var employee;
employee = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'web Developer'
};
// console.log(employee);
var obj = 43;
// console.log(obj.toString());
var skills = [];
// let skills: Array<string> = [];
skills[0] = 'Problem Solving';
skills[1] = 'Programming';
skills.push('Software Design');
// console.log(skills);
var skill = skills[0];
// console.log(typeof skill);
var nums = [1, 2, 3];
var doubleIt = nums.map(function (n) { return n * 2; });
// console.log(typeof nums);
// console.log('Length:', nums.length);
// console.log(doubleIt);
var scors;
scors = ['Programming', 5, 'Software Design', 4];
// console.log(Array.isArray(scors));
var result;
result = [1, 2, 3];
var total = result.reduce(function (a, b) { return a + b; }, 1);
console.log(total);
