const { MongoClient } = require('mongodb');
const connectionString = process.env.ATLAS_URI;

let db;

MongoClient.connect(connectionString, {
  useUnifiedTopology: true })
  .then(client => {
    db = client.db('express-demo');
    console.log('Successfully connected to MongoDB');

  })
  .catch(error => {
    console.log("Database error", error);
  });

exports.getDb = () => {
  return db;
};
