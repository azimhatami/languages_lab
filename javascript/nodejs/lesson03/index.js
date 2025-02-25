const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello NodeJs');
}).listen(4000, () => {
  console.log('server run on port 4000 : http://localhost:4000')
})
