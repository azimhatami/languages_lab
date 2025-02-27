const http = require('http');
const ProductsController = require('./controllers/product.controllers');
const ErrorHandler = require('./controllers/errorHandler.controller');
const PORT = 3000
const server = http.createServer((req, res) => {
  const apiRoute = 'api';
  const productsRoute = `${apiRoute}/products`;
  const singleProductRoute = /\/api\/products\/[0-9]+/
  const { url, method } = req;

  if (url == productsRoute && method == 'GET') {
    ProductsController.get(req, res)
  } else if (url.match(singleProductRoute) && method == 'GET') {
    ProductsController.getById(req, res)
  } else if (url == productsRoute && method == 'POST') {
    ProductsController.create(req, res)
  } else if (url.match(singleProductRoute) && method == 'PUT') {
    ProductsController.update(req, res)
  } else if (url.match(singleProductRoute) && method == 'DELETE') {
    ProductsController.remove(req, res)
  } else {
    ErrorHandler.notFound(res)
  }
})

server.listen(PORT, () => {
  console.log(`sever run on port ${PORT} : http://localhost:${PORT}`);
})
