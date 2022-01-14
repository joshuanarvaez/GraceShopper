const client = require("./client");

async function getProductById(id){

    try{

        const { rows: [product] } = await client.query(`
        
        SELECT *
        FROM products
        WHERE id=$1
        `,[id])
        
        return product;
    }catch(error){
        throw error;
    }
}

async function getAllProducts(){
    try{
        const {rows: products } = await client.query(`
        SELECT *
        FROM products
        `)

        return products
    }catch(error){
        throw error;
    }
}

async function createProduct({ name, description }){

    try{
        const { rows: [product]} = await client.query(`
            INSERT INTO products(name,description)
            VALUES ($1,$2)
            RETURNING *
        `,[name,description])

        return product;
    }catch(error){
        throw error;
    }
}

async function updateProduct({ id, name, description }){

    try{
        const {rows: [product]} = await client.query(`
            UPDATE products
            SET name=$1, description=$2
            WHERE id=$3
            RETURNING *
        `,[name,description, id])

        return product;
    }catch(error){
        throw error;
    }
}

module.exports ={
    getProductById,
    getAllProducts,
    createProduct,
    updateProduct
}