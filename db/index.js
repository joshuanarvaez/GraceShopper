// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'GRACE_SHOPPER'
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  ...require('./user')
  ...require('./cart')
  ...require('./orders')
  ...require('./product')
  ...require('./checkout')
  // db methods
}