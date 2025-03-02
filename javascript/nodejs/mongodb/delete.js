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
  // const result = await userCollection.deleteOne({firstName: 'MMd'});
  // const result = await userCollection.deleteMany({firstName: 'Zahra'});
  // const result = await userCollection.deleteMany({'address.street': 'Emam khomeiny 31'});
  const result = await userCollection.findOneAndDelete({_id: new ObjectId('67c2128f934b6d75d14a6e4a')});
  console.log('DeleteOne result', result)
  userCollection.count().then(count => {
    console.log(count);
  })
//  userCollection.countDocuments().then(count => {
//    console.log(count);
//  })
//  userCollection.find().toArray().then(res => {
//    console.log(res);
//  })

//   try {
//     const res = await userCollection.find({}).toArray();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
}


main()
