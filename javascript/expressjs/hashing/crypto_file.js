const crypto = require('crypto');
const fs = require('fs');
const fileName = 'text.txt';
const md5sum = crypto.createHash('md5');
const stream = fs.ReadStream(fileName);

// npm package
const md5 = require('md5');
let md5result = '';

stream.on('data', (data) => {
  md5sum.update(data)
  md5result += md5(data)
})

stream.on('end', () => {
  const hash = md5sum.digest('hex');
  fs.writeFile('hash.txt', hash, (err) => {
    if (err) console.log(err);
  })

  fs.writeFile('hash2.txt', md5result, (err) => {
    if (err) console.log(err);
  })
})
