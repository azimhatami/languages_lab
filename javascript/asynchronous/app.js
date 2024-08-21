// Async JavaScript

// sync => single thread => !!!

// non-blocking


// console.log('First log');
// 
// function greeting() {
//   console.log('This is greeting log');
// }
// 
// greeting();
// 
// console.log('Second log');

// console.log('First log');
// 
// setTimeout(() => {
//   console.log('This is greeting log!');
// }, 1000);
// 
// console.log('Second log');


//* callback

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     // return { email };
//     callback({ email, name: 'aaa' })
//   }, 2000);
// }
// 
// function findEnrolledCourses(email, callback) {
//   setTimeout(() => {
//     callback(['React.js', 'Next.js', 'Node.js'])
//   }, 1000);
// }
// 
// function getEpisodes(courseTitle, callback) {
//   setTimeout(() => {
//     callback(['E01', 'E02', 'E03', 'E04'])
//   }, 1000)
// }
// 
// loginUser('user@gmail.com', '12345', (userData) => {
//   console.log(userData.email);
//   findEnrolledCourses(userData.email, (courses) => {
//     console.log(courses);
//     getEpisodes(courses[0], (episodes) => {
//       console.log(episodes);
//     });
//   });
// });


//* promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve({email: 'user@gmail.com'});
//     reject(new Error('Password is not correct.'));
//   }, 2000)
// });
// 
// 
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message)
//   });


// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ email });
//     }, 2000);
//   });
// }
// 
// function findEnrolledCourses(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve(['React.js', 'Next.js', 'Node.js'])
//       reject(new Error('The course not found'))
//     }, 1000);
//   });
// }
// 
// function getEpisodes(courseTitle) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['E01', 'E02', 'E03', 'E04'])
//     }, 1000)
//   });
// }

// loginUser('user@gmail.com', '12345', (userData) => {
//   console.log(userData.email);
//   findEnrolledCourses(userData.email, (courses) => {
//     console.log(courses);
//     getEpisodes(courses[0], (episodes) => {
//       console.log(episodes);
//     });
//   });
// });


// loginUser('user@gmail.com')
//   .then((userData) => {
//     // console.log(userData);
//     return findEnrolledCourses(userData.email);;
//   })
//   .then((courses) => {
//     // console.log(courses);
//     return getEpisodes(courses[0]);
//   })
//   .then((episodes) => {
//     console.log(episodes);
//   })
//   .catch((error) => {
//     console.log(error.message)
//   });


// loginUser('user@gmail.com')
//   .then((userData) => findEnrolledCourses(userData.email))
//   .then((courses) => getEpisodes(courses[0]))
//   .then((episodes) => console.log(episodes))
//   .catch((error) => console.log(error.message));


// const getPosts = new Promise((resolve, rejecct) => {
//   setTimeout(() => {
//     resolve(['post #1', 'post #2', 'post #3']);
//   }, 2000)
// });
// 
// const getCourse = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(['course #1', 'course #2', 'course #3']);
//   }, 1000);
// });
// 
// Promise.all([getCourse, getPosts]).then((res) => {
//   console.log(res);
// });


// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ email });
//     }, 2000);
//   });
// }
// 
// function findEnrolledCourses(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['React.js', 'Next.js', 'Node.js'])
//       // reject(new Error('The course not found'))
//     }, 1000);
//   });
// }
// 
// function getEpisodes(courseTitle) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['E01', 'E02', 'E03', 'E04'])
//     }, 1000)
//   });
// }


//* async await

// async function displayEpisodes() {
//   const userData = await loginUser('user@gmail.com');  
//   console.log(userData);
//   const courses = await findEnrolledCourses(userData.email);
//   console.log(courses);
//   const episodes = await getEpisodes(courses[0]);
//   console.log(episodes);
// }
// 
// displayEpisodes();


//* Call stack - Event loop - Web Api

console.log('First log befor fetch');

setTimeout(() => {
  console.log('callback run after 2 secs');
}, 2000)

console.log('second log after fetch');













