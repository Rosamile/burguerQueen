const { MongoClient } = require('mongodb');
const config = require('./config');

// siempre se debe requerir el modulo de mongo db
// eslint-disable-next-line no-unused-vars
const { dbUrl } = config;
const client = new MongoClient(dbUrl);

async function connect() {
  // TODO: Database Connection
  return client.connect();
}

module.exports = { connect };
// en este archivo se debe hacer la conexión con mongo
