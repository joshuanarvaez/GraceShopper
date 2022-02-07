const client = require("./client");

//fetch user's cart container
async function getCart(id){

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

//this would be tied to individual product to be inserted to cart
async function addProductToCart ({ name, description }){

    try{
        const { rows: [product]} = await client.query(`
            INSERT INTO cart(name, description)
            VALUES ($1,$2)
            RETURNING *
        `,[name,description])

        return product;
    }catch(error){
        throw error;
    }
}

//increase or reduce product quantity from cart
async function updateProductQty({ id, name, description }){

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

// delete specific product based on ID from cart
async function removeProductFromCart({ id, name, description }){

    try{
        const {rows: [product]} = await client.query(`
            DELETE products
            SET name=$1, description=$2
            WHERE id=$3
            RETURNING *
        `,[name,description, id])

        return product;
    }catch(error){
        throw error;
    }
}

async function clearCart({ id, name, description }){

    try{
        const {rows: [cart]} = await client.query(`
            UPDATE cart
            SET "isOpen"='false'
            WHERE id=$1
            RETURNING *
        `,[name,description, id])

        return {
            message: 'Your cart is cleared'
        };
    }catch(error){
        throw error;
    }
}

//create functionality to direct user to checkout items
async function sendOrder ({ id, name, description }){

    try{
        const { rows: [product]} = await client.query(`
            INSERT INTO products(name, description)
            VALUES ($1,$2)
            RETURNING *
        `,[name,description])

        return product;
    }catch(error){
        throw error;
    }
}

module.exports ={
    getCart,
    addProductToCart,
    updateProductQty,
    removeProductFromCart,
    clearCart,
    sendOrder
}