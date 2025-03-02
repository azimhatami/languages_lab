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
//   const result = await userCollection.findOne({
//     _id: new ObjectId('67c210a954336ca3e19f790e'),
//   },
//     { 
//       projection: {
//         age: 0,
//         birthDay: 0
//       }
//     });
//   const result = await userCollection.findOne({
//     _id: new ObjectId('67c210a954336ca3e19f790e'),
//   },
//     { 
//       projection: {
//         firstName: 1
//       }
//     });
//   const result = await userCollection.find({}, {
//     skip: 2,
//     limit: 1
//   }).toArray();
//  const result = await userCollection.find({}, {
//    sort: {_id: -1}
//  }).toArray();
  const result = await userCollection.find({}, {
    sort: {age: -1}
  }).toArray();
  console.log('Find result', result)
}


main()
