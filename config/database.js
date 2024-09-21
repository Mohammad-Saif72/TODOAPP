//mongoose instance
const mongoose = require('mongoose');

// Load environment variables from the .env file
require('dotenv').config();

//if any one call this dbconnect function then database connection establish
const dbconnect = ()=>{
    // Connect to MongoDB using Mongoose
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to MongoDB suceessfully'))
.catch((err) => console.error('Connection failed', err));
}

module.exports = dbconnect; 