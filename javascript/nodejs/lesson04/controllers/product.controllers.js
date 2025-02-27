const ProductModel = require('../model/product.model');

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, {'Content-Type': 'application/json'});
    // TODO JSON.stringify
    res.write(JSON.stringify(products))
    res.end()
  } catch (error) {
    console.log(error);
  }
}

async function getById(req, res) {
  try {
    const [,,,id] = req.url.split('/')
    const product = await ProductModel.findById(id);
    if (!product){
      res.writeHead(404, {'Content-Type': 'application/json'});
      // TODO JSON.stringify
      res.write(JSON.stringify({
        message: 'Not Found any product'
      }))
      res.end()
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      // TODO JSON.stringify
      res.write(JSON.stringify(product))
      res.end()
    }
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {

    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
      console.log(chunk.toString());
    })

    req.on('end', async () => {
      const product = {id: Date.now(), ...JSON.parse(body)};
      const result = await ProductModel.createProduct(product);
      res.writeHead(201, {'Content-Type': 'application/json'});
      // TODO JSON.stringify
      res.write(JSON.stringify(result))
      res.end()
    })

  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {

    let body = '';
    const id = req.url.split('/')[3]

    req.on('data', (chunk) => {
      body += chunk.toString();
      console.log(chunk.toString());
    })

    req.on('end', async () => {
      const parsedBody = {...JSON.parse(body)};
      const product = await ProductModel.findById(id);
      if (!product) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        // TODO JSON.stringify
        res.write(JSON.stringify({
          message: 'Not Found any product'
        }))
        res.end()
      } else {
        const updatedProduct = await ProductModel.updateProduct(id, parsedBody);
        res.writeHead(200, {'Content-Type': 'application/json'});
        // TODO JSON.stringify
        res.write(JSON.stringify(updatedProduct))
        res.end()
      }
    })


  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  try {
    const id = req.url.split('/')[3]
    const product = await ProductModel.findById(id);
    if (!product){
      res.writeHead(404, {'Content-Type': 'application/json'});
      // TODO JSON.stringify
      res.write(JSON.stringify({
        message: 'Not Found any product'
      }))
      res.end()
    } else {
      const result = ProductModel.deleteProduct(id)
      res.writeHead(200, {'Content-Type': 'application/json'});
      // TODO JSON.stringify
      res.write(JSON.stringify(result))
      res.end()
    }
  } catch (error) {
    console.log(error);
  }
}
const ProductsController = {
  get,
  getById,
  create,
  update,
  remove
};

module.exports = ProductsController
