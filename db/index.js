// Connect to DB
const { Client } = require('pg');
<<<<<<< HEAD
<<<<<<< HEAD
const DB_NAME = 'change-this-name'
=======
const DB_NAME = 'GRACE_SHOPPER'
>>>>>>> 005409822f31ae0f2969b337b14f41c415a76e2a
=======
const DB_NAME = 'GRACE_SHOPPER';
>>>>>>> 48663e0d7374ca548279834caf47c5119daed191
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  ...require('./user')
  ...require('./cart')
  ...require('./orders')
  ...require('./product')
=======
  ...require('./user'),
  ...require('./cart'),
  ...require('./orders'),
  ...require('./product'),
>>>>>>> 48663e0d7374ca548279834caf47c5119daed191
  ...require('./checkout')
>>>>>>> 005409822f31ae0f2969b337b14f41c415a76e2a
  // db methods
}