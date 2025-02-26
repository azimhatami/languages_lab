const fs = require('fs');

const dirName = './'
// const checkExist = fs.existsSync(dirName)
// if (!checkExist) {
//   fs.mkdir(dirName, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log('Directory created');
//   })
// } else {
//   console.log('This is dir existed!')
// }

fs.readdir(dirName, (err, files) => {
  if (err) {
    console.log(err);
  } else {
   console.log(files);
  }
})
