const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err.message); 
    process.exit(1);
  }
};

module.exports = connectDB;