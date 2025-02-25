// getters & setters

class Foo {
  #private
  constructor(value) {
    this.#private = value;
  }

  get privateProperty() {
    if (this.#private == 'value of private') {
      return 'this value is not accepted value';
    } else {
      return this.#private;
    }
  }

  set changeProperty(value) {
    if (!value) return this.#private = 'Not Accepted';
    if (value.toString().length < 3) return this.#private = null;
    return this.#private = value;
  }
}

const foo = new Foo('value of private');
foo.changeProperty = 'This is a new value'
console.log(foo.privateProperty)
