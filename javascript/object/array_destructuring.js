// array destructuring

const nums = [1, 2, ['three', 'four']];
const [a, b, [c1, c2], d = 4] = nums;


// console.log(a, b, d, c1, c2);


const course = {
  title: 'React.js',
  students: ['Ali', 'Vahid', 'Saheb'],
  tags: ['frontend', 'backend', 'web developer'],

  orderMsg(studentsIndex, tagsIndex) {
    return [this.students[studentsIndex], this.tags[tagsIndex]];
  },
}

const {title, tags} = course;


// const [courseMianTag, courseSecondTag] = tags
const [studentName, tagName] = course.orderMsg(0, 1);

console.log(studentName, tagName);

