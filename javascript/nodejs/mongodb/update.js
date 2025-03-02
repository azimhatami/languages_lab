const { MongoClient, ObjectId } = require('mongodb');


// Connection URL
const DB_URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(DB_URL);

// Database Name
const DB_NAME = 'mongoTutor';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(DB_NAME);
  const userCollection = db.collection('user');
  // const result = await userCollection.updateOne({firstName: 'Ali'}, {$set: {age: 27}});
  // const result = await userCollection.updateOne({firstName: 'Azim'}, {$push: {skills: 'React'}});
  // const result = await userCollection.updateOne({firstName: 'hesam'}, {$pull: {skills: 'Adobe'}});
  // const result = await userCollection.updateOne({firstName: 'hesam'}, {$inc: {age: -10}});
  // const result = await userCollection.updateOne({firstName: 'hesam'}, {$unset: {age: 1}});
  // const result = await userCollection.updateOne({firstName: 'hesam'}, {$set: {age: 12}});
  const result = await userCollection.updateMany({firstName: 'hesam'}, {$set: {age: 100}});
  console.log('Update One result: ', result)
}


main()
