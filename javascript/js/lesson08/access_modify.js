class User {
  #firstName;
  #lastName;
  constructor(name, family) {
    this.#firstName = name;
    this.#lastName = family;
  }

  getFullName() {
    return `Hello ${this.#firstName} ${this.#lastName}`;
  }
}

const azim = new User('Azim', 'Hatami');
console.log(azim.getFullName());
