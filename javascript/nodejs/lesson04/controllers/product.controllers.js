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

const ProductsController = {
  get,
  getById,
  create
};

module.exports = ProductsController
