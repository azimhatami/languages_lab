// object destructuring:

const course = {
  title: 'Next.js',
  price: 100,
  discount: 30,
  students: ['Ali', 'Vahid', 'Saheb'],
  tags: ['frontend', 'backend', 'web developer'],
  isFree: false,
  category: {
    id: 1,
    englishTitle: 'frontend',
    title: 'front-end',
  },
  calcOffPrice () {
    this.offPrice = this.price * (1 - this.discount / 100);
    return this.offPrice;
  },

  showWelcomeMsg ({name, email = '---', phonNumber = '---'}) {
    // template literal
    return`Hi ${name}, Email: ${email}, PhonNumber: ${phonNumber}. Welcome to JavaScript`
  },
};

const {title: courseTitle, category: {id, englishTitle, title}, tags = [], showWelcomeMsg: showMsg} = course;
// const {englishTitle, id, title} = category;

console.log(title, id, englishTitle);
console.log(courseTitle);
console.log(tags);
console.log(showMsg({
  name: 'Azim',
  email: 'user@test.com',
  phonNumber: '09150000000',
}));
