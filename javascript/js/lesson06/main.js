// Hoisting

test()


function test() {
  // console.log('Hosting');
}


// Closure

function outer() {
  const name = 'Nodejs';
  function inside() {
    console.log(name);
  }

  return inside;
}


// outer()()
// const result = outer();
// result()


function makeAdder(x) {
  return function (y) {
    return x + y
  }
}


const adder4 = makeAdder(4);

// console.log(adder4(8))


function makeSize(size) {
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}

const size10 = makeSize(10);
const size20 = makeSize(20);
const size30 = makeSize(30);
const size40 = makeSize(40);

// console.log('test');



