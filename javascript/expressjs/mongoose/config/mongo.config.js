const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/mongoose-tutor';


async function connectToDatabase() {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
}

connectToDatabase();

