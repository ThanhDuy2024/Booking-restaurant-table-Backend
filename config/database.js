const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);   
    console.log("Database has been connected"); 
  } catch (error) {
    console.log("Database has not been connected");
  }
}