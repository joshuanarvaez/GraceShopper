const client = require('./client')


async function dropTables() {
    console.log('Dropping All Tables...');
    
    try{ 
        
        await client.query(`
        DROP TABLE IF EXISTS cart;
        DROP TABLE IF EXISTS checkout;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS user;
        DROP TABLE IF EXISTS products;
        `)}catch(error){
            
            throw error
        }
  }


async function createTables() {
    console.log('Starting to build tables...')

    await client.query(`
   CREATE TABLE products(
       id SERIAL PRIMARY KEY,
       product VARCHAR(255) UNIQUE NOT NULL,
       description TEXT NOT NULL
   ); 
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        product VARCHAR(255) UNIQUE NOT NULL
        description TEXT NOT NULL
    )
    `)
}