const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  console.log("=> using new database connection");
  return mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      isConnected = db.connections[0].readyState;
    });
};

module.exports = connectToDatabase;
