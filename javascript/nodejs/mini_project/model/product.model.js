const ConnectToMongoDB = require('./../utils/db_connection');
const { ObjectId } = require('mongodb');

const productCollection = 'product';

async function find() {
  const db = await new ConnectToMongoDB().get();
  return new Promise(async (resolve, reject) => {
    const products = await db.collection(productCollection).find().toArray();
    resolve(products)
  })
}

async function findById(id) {
  const db = await new ConnectToMongoDB().get();
  return new Promise(async (resolve, reject) => {
    const product = await db.collection(productCollection).findOne({ _id: new ObjectId(id) })
    resolve(product)
  })
}

async function createProduct(product) {
  const db = await new ConnectToMongoDB().get();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).insertOne(product)
    resolve(result)
    })
}

async function updateProduct(id, payload) {
  const db = await new ConnectToMongoDB().get();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).updateOne({ _id: new ObjectId(id) }, {
      $set: {...payload}
    })
    resolve(result)
    })
}

async function deleteProduct(id) {
  const db = await new ConnectToMongoDB().get();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).deleteOne({ _id: new ObjectId(id) })
    resolve(result)
  })
}

const ProductModel = {
  find,
  findById,
  createProduct,
  updateProduct,
  deleteProduct
};

module.exports = ProductModel
