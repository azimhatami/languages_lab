var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.getHeadcount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}());
var emp1 = new Employee('Ali', 'Hatami', 'Front-end Developer');
var emp2 = new Employee('Mahsa', 'Hatami', 'UI/UX');
// console.log(Employee.headcount);
console.log(Employee.getHeadcount());
