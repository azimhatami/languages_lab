// Constructor function

function CreateCourse(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;

  this.calcOffPrice = function () {
    return price * (1 - discount / 100);
  }
}

const course1 = new CreateCourse('Next.js', 200, 10);
const course2 = new CreateCourse('React.js', 300, 20);
// course1.students = 230;
// delete course1.students;

// console.log(course1.calcOffPrice());
// console.log(course2);
//console.log(course1 instanceof CreateCourse);
// console.log(course1.hasOwnProperty('title'));

console.log(Object.keys(course1));
console.log(Object.values(course1));
console.log(Object.entries(course1));
