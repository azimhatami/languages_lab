//* Selecting element in DOM:

// const course = document.querySelector('.course-title');
// console.log(course.textContent);

const courses = document.querySelectorAll('.course-title')

courses.forEach((course) => {
  console.log(course.textContent);
});

// console.log(document.getElementById('course-list'));
// console.log(document.getElementsByClassName('courses'));
// console.log(document.querySelector('.courses'));
// console.log(document.querySelector('#course-list'));


//* add element

const newCourse = document.createElement('p');
newCourse.textContent = 'JavaScript Course';
newCourse.classList.add('course-title');
document.querySelector('#course-list').append(newCourse)
// document.querySelector('#course-list').prepend(newCourse)

// console.log(newCourse.textContent);


// const seeMore = document.createElement('p');
// seeMore.textContent = 'See all courses';
// seeMore.classList.add('see-more');
// document.querySelector('#course-list').append(seeMore)
// 
// const seeBtn = document.createElement('button');
// seeBtn.textContent = 'See all';
// seeBtn.classList.add('see-btn');
// document.querySelector('.see-more').append(seeBtn);


const seeMore2 = document.createElement('div');
seeMore2.classList.add('see-more-section');
seeMore2.innerHTML = `<p class='randome-p'>see all courses 2</p>
<button class='see-btn'>See All 2</button>
<button class='close-btn'>Close</button>`;
document.querySelector('#course-list').append(seeMore2);


// Updating
// document.querySelector('.app-title').textContent = 'Azim Hatami';


// Remove
// document.querySelector('.app-title').remove();
// document.querySelector('.courses').remove();
const courses2 = document.querySelectorAll('.course-title');
// console.log(courses2);

// courses2.forEach((c) => {
//   c.remove();
// })


const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  // console.log('clicked !!!')
  document.querySelector('.see-more-section').remove();
})


//* input - change :

const searchInput = document.querySelector('#search-value');

// searchInput.value = 'Azim';

// searchInput.addEventListener('input', (event) => {
//   console.log(event.target.value);
// });

searchInput.addEventListener('copy', (event) => {
  console.log(`${event.type} ::  ${document.getSelection()}`);
});

searchInput.addEventListener('paste', (event) => {
  console.log(`${event.type} :: ${event.clipboardData.getData('text/plain')}`);
});












