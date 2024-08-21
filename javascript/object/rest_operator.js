// rest operator

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a, b, rest);


const tags1 = ['React.js', 'Vue.js'];
const tags2 = ['Next.js', 'Nuxt.js'];
const [reactTag, ...rest] = [...tags1, ...tags2];
// console.log(reactTag, rest);


// object
const user = {
  id: 1, 
  name: 'Azim',
  email: 'user@test.com',
  phonNumber: '0994000000',
};

const {id, ...otherUserData} = user;
// console.log(id, otherUserData);

function addition(...args) {
  let total = 0;
  for (let item of args) {
    total += item
  }
  return total
}

console.log(addition(1, 2));
console.log(addition(1, 2, 3, 4));
console.log(addition(1, 2, 3, 4, 5, 6));
const nums = [1, 2, 32, 4, 5];
console.log(addition(...nums));

