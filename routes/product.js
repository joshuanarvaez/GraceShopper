const express = require('express')
const productRouter = express.Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const { createProduct, getAllProducts, getProductById, updateProduct } = require('../db/product')

