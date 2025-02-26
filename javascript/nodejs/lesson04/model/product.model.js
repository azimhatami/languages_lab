const products = require('../data/products');

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(products.find(p => p.id == id))
  })
}

const ProductModel = {
  find,
  findById
};

module.exports = ProductModel
