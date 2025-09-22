// TypeScript Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let numbers = [2, 8, 21, 3, 1, 16];
// console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var colors = ['red', 'green', 'blue'];
// console.log(getRandomString(colors));
// Using any type
function getRandomAnyElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// console.log(getRandomAnyElement(numbers));
// console.log(getRandomAnyElement(colors));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// console.log(getRandomElement<number>(numbers))
// console.log(typeof getRandomElement<number>(numbers)) // number
// console.log(getRandomElement<string>(colors))
// console.log(typeof getRandomElement<string>(colors)) // string
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: 'John' }, 
// { jobTitle: 'Frontend Developer' },
{ age: 22 }
// 22 // Error
);
// console.log(result);
// console.log(typeof result);
function prop(obj, key) {
    return obj[key];
}
var str = prop({ name: 'Azim' }, 'name');
// let str = prop({ name: 'Azim' }, 'age'); // Error
// console.log(str);
// TypeScript generic classes
// class className<T>{
//... 
// }
// class className<T, U>{
//... 
// }
// class className<T extends TypeA>{
//... 
// }
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers = new Stack(5);
// console.log(numbers);
// while (!numbers.isFull()) {
// 	let n = randBetween(1, 10);
// 	console.log(`Push ${n} into the stack.`)
// 	numbers.push(n)
// }
// 
// while (!numbers.isEmpty()) {
// 	let n = numbers.pop();
// 	console.log(`Pop ${n} from the stack.`);
// }
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
