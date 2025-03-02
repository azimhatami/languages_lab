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
  // const result = await userCollection.find({"address.street": {$in: ['keshavarz', 'tajrishs']}}).toArray();
  // const result = await userCollection.find({_id: {$in: [new ObjectId('67c2cbed908d91ea9b51e946'), new ObjectId('67c2cb26908d91ea9b51e944')]}}).toArray();
  const result = await userCollection.findOne({firstName: 'Ali'});
  console.log('Find result', result)
  userCollection.count().then(count => {
    console.log(count);
  })
}


main()
