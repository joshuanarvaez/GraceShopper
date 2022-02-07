// const client = require('./client')


// async function dropTables() {
//     console.log('Dropping All Tables...');
    
//     try{ 
        
//         await client.query(`
//         DROP TABLE IF EXISTS cart;
//         DROP TABLE IF EXISTS checkout;
//         DROP TABLE IF EXISTS orders;
//         DROP TABLE IF EXISTS users;
//         DROP TABLE IF EXISTS products;
//         `)}catch(error){
            
//             throw error
//         }
//   }


// async function createTables() {
//     console.log('Starting to build tables...')

//     await client.query(`
//    CREATE TABLE products(
//        id SERIAL PRIMARY KEY,
//        product VARCHAR(255) UNIQUE NOT NULL,
//        description TEXT NOT NULL,
//        price TEXT NOT NULL
//    ); 
//     CREATE TABLE users(
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL
//     );
//     CREATE TABLE orders(
//         id SERIAL PRIMARY KEY,
//         product VARCHAR(255) UNIQUE NOT NULL,
//         quantity TEXT NOT NULL,
//         total TEXT NOT NULL
//     )
//     `)
// }

// async function createInitialUsers() {
//     console.log('Starting to create users...');
//     try {
  
//       const usersToCreate = [
//         { username: 'albert', password: 'bertie99' },
//         { username: 'sandra', password: 'sandra123' },
//         { username: 'glamgal', password: 'glamgal123' },
//       ]
//       const users = await Promise.all(usersToCreate.map(createUser));
  
//       console.log('Users created:');
//       console.log(users);
//       console.log('Finished creating users!');
//     } catch (error) {
//       console.error('Error creating users!');
//       throw error;
//     }
//   }

//   async function createInitialProducts() {
//     try {
//       console.log('Starting to create products...');
  
//       const productsToCreate = [
//         { product: 'Bananas', description: 'Best Bananas money can buy', price: '$50' },
//         { product: 'Apples', description: 'Best Apples money can buy', price: '$50' },
//         { product: 'Kiwis', description: 'Best Kiwis money can buy', price: '$50' },
//         { product: 'Grapes', description: 'Best Grapes money can buy', price: '$50' },
//         { product: 'Strawberries', description: 'Best Strawberries money can buy', price: '$50' },
//         { product: 'Pomegranates', description: 'Best Pomegranates money can buy', price: '$50' },
//         { product: 'Oranges', description: 'Best Oranges money can buy', price: '$50' },
//       ]
//       const products = await Promise.all(productsToCreate.map(createProduct));
  
//       console.log('products created:');
//       console.log(products);
  
//       console.log('Finished creating products!');
//     } catch (error) {
//       console.error('Error creating products!');
//       throw error;
//     }
//   }


//   async function createInitialOrders() {
//     try {
//       console.log('starting to create orders...');
  
//       const ordersToCreate = [
//         {product: 'Bananas', quantity: '5', total: '$250'},
//         {product: 'Grapes', quantity: '30', total: '$1,500'},        
//         {product: 'Kiwis', quantity: '2', total: '100'},
//         {product: 'Apples', quantity: '10', total: '$500'},
//     ]
//       const orders = await Promise.all(ordersToCreate.map(order => createOrder(order)));
//       console.log('Orders Created: ', orders)
//       console.log('Finished creating orders.')
//     } catch (error) {
//       throw error;
//     }
//   }



//   async function rebuildDB() {
//     try {
//       client.connect();
//       await dropTables();
//       await createTables();
//       await createInitialUsers();
//       await createInitialProducts();
//       await createInitialOrders();
//     } catch (error) {
//       console.log('Error during rebuildDB')
//       throw error;
//     }
//   }
  
//   module.exports = {
//     rebuildDB
//   };

