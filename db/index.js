// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'GRACE_SHOPPER';
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  ...require('./user'),
  ...require('./cart'),
  ...require('./orders'),
  ...require('./product'),
<<<<<<< HEAD
  ...require('./checkout')
=======
  ...require('./checkout'),
>>>>>>> 575c76965c3d1d03c87b4c6a223c293ae626c88b
  // db methods
}