const { createReadStream, statSync } = require('fs');
const http = require('http');

const fName = './dance.mp4';

http.createServer((req, res) => {
  const readStream = createReadStream(fName);
  const { size } = statSync(fName)
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/, '').split('-')
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Range': 'bytes',
      'Content-Length': (start - end ) + 1,
      'Content-Type': 'video/mp4',
    })
    createReadStream(fName, {start, end}).pipe(res)
  } else {
    res.writeHead(200, { 
      'Content-Type': 'video/mp4',
      'Content-Length': size,
    })
    readStream.pipe(res)
  }
}).listen(3000, () => {
  console.log('run on port 3000: http://localhost:3000');
})
