// build and export unconnected client here
const { Client } = require('pg');
const DB_NAME = 'GRACE_SHOPPER'
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);


// require and re-export all files in this db directory
module.exports = {
  client,
  ...require('./user'),
  ...require('./cart'),
  ...require('./orders'),
  ...require('./product'),
  ...require('./checkout'),
}
