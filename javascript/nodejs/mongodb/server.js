const { MongoClient } = require('mongodb');


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
  const result = await userCollection.insertOne({
    firstName: 'Azim',
    lastName: 'Hatami',
    age: 21,
    skills: ['nodejs', 'TypeScript', 'JavaScript'],
    identity: '245240852452',
    birthDay: new Date('03-22-1997'),
    address: {
      province: 'Khorasan',
      city: 'Neyshabur',
      street: 'pasandideh'
    }
  });
  console.log('inserted result', result)
  userCollection.find().toArray().then(res => {
    console.log(res);
  })

//   try {
//     const res = await userCollection.find({}).toArray();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
}


main()
