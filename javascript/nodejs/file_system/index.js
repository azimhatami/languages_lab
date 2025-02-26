const fs = require('fs');

// NON-BLOCKING CODE

// console.log('first');
// fs.readFile('./package.json', (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// }) 
// console.log('second');


// BLOCKING CODE

// console.log('first');
// const data = fs.readFileSync('package.json', 'utf-8');
// console.log(data);
// console.log('second');

