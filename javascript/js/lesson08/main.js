class User {
  name;
  family;
  constructor(firstName, lastName) {
    this.name = firstName;
    this.family = lastName;
  }

  greetings() {
    return `Hello ${this.name} ${this.family}`;
  }
}

const user1 = new User('Azim', 'Hatami');
user1.name = 'ali';
console.log(user1.greetings())
