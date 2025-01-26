// OOP

function CreateCourse(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
}

CreateCourse.prototype.calcOffPrice = function () {
  return this.price * (1 - this.discount / 100);
}

CreateCourse.prototype.courseDetail = function () {
  return `the course name is ${this.title} and the course price is ${this.price}.`;
}



const course = new CreateCourse('React.js', 200, 10);
// console.log(course.__proto__);
// console.log(course.courseDetail());


class Course {
  constructor(title, price, discount) {
    this.title = title;
    this.price = price;
    this.discount = discount;
  }

  calcOfPrice() {
    return this.price * (1 - this.discount / 100);
  }

  courseDetail() {
    return `The course name is ${this.title} and the course price is ${this.price}`;
  }
}

const courseCl = new Course('Next.js', 300, 10);

// console.log(courseCl.courseDetail());


//* setter and getter | Property accessors

const user = {
  firstName: 'Azim',
  lastName: 'Hatami',

  get fullName() {
    return `${user.firstName} ${user.lastName}`;
  },

  set fullName(name) {
    if (name && name.includes(' ')) {
      [this.firstName, this.lastName] = name.split(' ');
    } else {
      alert(`${name} is not a valid fullName`);
    }
  },
};

// console.log(user.fullName);

user.fullName = 'Ali Rad';

// console.log(user.fullName);

const user2 = {
  name: 'Mmd', 
  birthday: '1995-05-06T00:11:23.819Z',
  get age() {
    const nowYr = new Date().getFullYear();
    const birthYr = new Date(this.birthday).getFullYear();
    return nowYr - birthYr;
  },
};

// console.log(user2.age);


class Article{
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static testMethod() {
    console.log(this);
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// Article.testMethod = function () {
//   console.log(this);
// }

const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

// console.log(article.testMethod());
// Article.testMethod()

// console.log(Article.compare(articles[0], articles[1]));

// console.log(articles.sort(Article.compare));

//* Class Inheritance
class User {
  constructor({ name, age }) {
    this.name = name;
    this.age = age
  }

  greet() {
    return `Hi ! ${this.name}, welcome to JavaScript!`;
  }
}

// const user3 = new User('Azim');
// console.log(user3.greet());
// console.log(user3.name);

class Admin extends User {
  constructor({ name, age, role }) {
    super({ name, age }); // call the parent constructor
    this._role = role;
  }

  introduce() {
    return `Im ${this.name}, age: ${this.age},  and my role is ${this._role}`;
  }
}

const admin = new Admin({name: 'Ali', age: 28, role: 'ADMIN'});
console.log(admin.introduce());
console.log(admin.greet());


//* protected properties : Encapsulation
// data privacy


































