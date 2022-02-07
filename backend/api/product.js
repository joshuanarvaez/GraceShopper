const express = require('express')
const productRouter = express.Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const { admin1, admin2, admin3, admin4 } = require('./middleware/requireAdmin');

const { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct 
} = require('../db/product')

productRouter.get('/', async(req, res) => {
    try{
    const products = await getAllProducts();

    res.send({
        products
    })
}catch (error) {
    throw error;
}
});


productRouter.post('/', async(req, res, next) => {
    
    const { name, description, price} = req.body

if(!admin1 || admin2 || admin3 || admin4){
    next({
        name:"MissingAdminError",
        message: "You must be an Administrator to perform this action",
        status: 401
    })
}else {
        
        const product = await createProduct({name, description, price})
        return res.send(
           product 
        )
        }
})

productRouter.patch('/:productId', async(req, res, next) => {
    const { productId } = req.params
    const {name, description, price } = req.body

    if(!admin1 || admin2 || admin3 || admin4){
        next({
            name:"MissingAdminError",
            message: "You must be an Administrator to perform this action",
            status: 401
        })
    }else {

    const updateInfo = {
        id: productId,
        name: name,
        description: description,
        price: price
    }

    const product = await updateProduct(updateInfo)

    return res.send({
        product
    })
}
})