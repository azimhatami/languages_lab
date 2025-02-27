const products = require('../data/products');
const fs = require('fs');

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

async function createProduct(product) {
  return new Promise((resolve, reject) => {
    products.push(product)
    fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
      if (err) reject(err)
      else resolve({message: 'new product created', data: product})
    })
  })
}

const ProductModel = {
  find,
  findById,
  createProduct
};

module.exports = ProductModel
