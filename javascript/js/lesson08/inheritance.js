// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return this.name;
  }
}

class Pets extends Animal {
  #sound;
  constructor(name, sound) {
    super(name);
    this.#sound = sound;
  }

  getSound() {
    return this.#sound;
  }
}

const dog = new Pets('Dog', 'hop - hop')
const cat = new Pets('Cat', 'meeow - meeow')

// console.log(dog.getSound(), cat.getSound())

class Human {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age
  }

  info() {
    return `My name is ${this.name} ${this.lastName}, i'm ${this.age} years old.`;
  }

  eat() {
    return 'Eating ...';
  }
}


const farhad = new Human('Farhad', 'Mohammadi', 11);

console.log(farhad.info())
console.log(farhad.eat())

class Student extends Human {
  constructor(name, lastName, age, schoolName) {
    super(name, lastName, age)
    this.schoolName = schoolName;
  }

  eat() {
    return 'I eating everythings';
  }
}

const azim = new Student('Azim', 'Hatami', 21, 'Fani');

console.log(azim.info())
console.log(azim.eat())
