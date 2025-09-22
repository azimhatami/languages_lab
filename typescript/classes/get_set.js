var Person = /** @class */ (function () {
    function Person(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person;
}());
var p = new Person(21, 'Azim', 'Hatami');
console.log(p);
console.log(p.age); // 21 (getter)
p.age = 30;
console.log(p.age);
console.log(p.getFullName()); // 'Azim Hatami'
