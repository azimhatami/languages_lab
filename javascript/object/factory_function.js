// factory function

function createCourse(title, price, discount) {
  return {
    title,
    price,
    discount,
    calcOffPrice () {
      return price * (1 - discount / 100);
    },
  };
}

console.log(createCourse('Next.js', 200, 10).calcOffPrice());
console.log(createCourse('React.js', 300, 20));
