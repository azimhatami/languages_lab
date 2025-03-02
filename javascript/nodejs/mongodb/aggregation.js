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
  const result = await userCollection.aggregate([
    {
      $match: { firstName: 'hesam' }
    },
    {
      $addFields: { userAge: "$age" }
    },
    {
      $project: { age: 0 }
    },
  ]).toArray();
  console.log('Aggregate ', result)
}


main()
