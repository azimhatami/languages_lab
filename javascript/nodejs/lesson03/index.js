const http = require('http');

http.createServer((request, response) => {
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.writeHead(200, {'Content-Type': 'text/html'});
  // response.writeHead(200, {'Content-Type': 'application/json'});
  // XML
  response.writeHead(200, {'Content-Type': 'text/xml'});
  // response.end('Hello NodeJs');
  // response.end('<h1>Hello NodeJs</h1>');
  // response.write(JSON.stringify({
  //   name: 'NodeJS',
  //   course: 'NodeJS And ExpressJS'
  // }))
  response.write('<xml><key>This is a key</key></xml>')
  response.end();
}).listen(4000, () => {
  console.log('server run on port 4000 : http://localhost:4000')
})
