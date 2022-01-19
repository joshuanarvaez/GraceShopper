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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 48663e0d7374ca548279834caf47c5119daed191
  ...require('./checkout')
>>>>>>> 005409822f31ae0f2969b337b14f41c415a76e2a
=======
<<<<<<< HEAD
<<<<<<< HEAD
  ...require('./checkout'),
=======
  ...require('./checkout')
>>>>>>> 48663e0d7374ca548279834caf47c5119daed191
=======
  ...require('./checkout')
=======
  ...require('./checkout'),
>>>>>>> 575c76965c3d1d03c87b4c6a223c293ae626c88b
>>>>>>> 818a7f65197d89a0f67254a0f0e64092ee35ce80
>>>>>>> f9f24a301797a072265f351811ae2c3216653f98
=======
  ...require('./checkout')
>>>>>>> b4401a2cf675a0e9d4c0d654c9657c42d99bd0d0
  // db methods
}