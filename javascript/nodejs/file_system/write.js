const fs = require('fs');

const data = 'Text for test';

// fs.writeFile('write.txt', data, {flag: 'a'}, (error) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log('write in file done!');
// })


// fs.writeFileSync('write.txt', data)


// fs.appendFile('write.txt', data, (error) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log('appended text');
// }
// );


// fs.appendFileSync('write.txt', data);

const checkExist = fs.existsSync('file.txt')

if (checkExist) {
  console.log(checkExist);
//   fs.unlink('write.txt', (error) => {
//     if (error) {
//       console.log(error);
//     }
//   })
  fs.unlinkSync('file.txt')
} else {
  console.log('not found file');
}
