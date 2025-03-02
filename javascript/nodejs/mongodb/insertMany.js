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
  const result = await userCollection.insertMany([
    {
      firstName: 'MMd',
      lastName: 'Hatami',
      age: 21,
      skills: ['React', 'TypeScript', 'JavaScript'],
      identity: '645040982451',
      birthDay: new Date('13-29-1999'),
      address: {
        province: 'Karaj',
        city: 'Karaj',
        street: 'jamshidieh'
      }
    },
    {
      firstName: 'Abol',
      lastName: 'Hatami',
      age: 21,
      skills: ['UI/UX', 'Adobe', 'Marketing'],
      identity: '0920777356774',
      birthDay: new Date('08-12-2000'),
      address: {
        province: 'Khorasan',
        city: 'Neyshabur',
        street: 'Emam khomeiny 31'
      }
    },
  ]);
  console.log('insertedMany result', result)
//  userCollection.count().then(count => {
//    console.log(count);
//  })
//  userCollection.countDocuments().then(count => {
//    console.log(count);
//  })
  userCollection.find().toArray().then(f => {
    console.log(f);
  })

//   try {
//     const res = await userCollection.find({}).toArray();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
}


main()
