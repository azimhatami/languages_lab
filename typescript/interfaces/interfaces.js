// Introduction to typescript inerfaces
function getFullName(person) {
    if (person.middleName) {
        return "Full name: ".concat(person.firstName, " ").concat(person.lastName, " \nMiddle name: ").concat(person.middleName, " \nssn: ").concat(person.ssn);
    }
    return "Full name: ".concat(person.firstName, " ").concat(person.lastName, " \nssn: ").concat(person.ssn);
}
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
// console.log(format('hi', true)); // HI
// console.log(format('Azim', false)); // azim
var lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Person.prototype.toJson = function () {
        // return JSON.stringify(this);
        return JSON.stringify({
            firstName: this._firstName,
            lastName: this._lastName
        });
    };
    return Person;
}());
var p = new Person('Azim', 'Hatami');
console.log(p.toJson());
