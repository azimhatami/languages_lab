var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, age, birthDate) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDate = birthDate;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person1 = new Person('ssn1', 'Ali', 'Hatami', 22, new Date(2020, 12, 25));
console.log(person1.getFullName());
console.log(person1.birthDate);
person1.firstName = 'Mmd';
// person1.birthDate = new Date(2022, 13, 20); // read-only
console.log(person1.getFullName());
console.log(person1.birthDate);
// console.log(person1.age); // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
