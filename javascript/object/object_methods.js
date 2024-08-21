
const course = {
  title: 'Next.js',
  price: 100,
  discount: 30,
  students: ['Ali', 'Vahid', 'Saheb'],
  isFree: false,
  category: {
    id: 1,
    englishTitle: 'frontend',
    title: 'Front-end',
  },
  calcOffPrice: function () {
    this.offPrice = this.price * (1 - this.discount / 100);
    return this.offPrice;
  },
};

console.log(course.calcOffPrice());
console.log(course.offPrice);
