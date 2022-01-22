const express = require('express')
const app = express.Router()

const jwt = require ('jsonwebtoken')
const { JWT_SECRET } = process.env


app.get("/health", (req, res, next) => {
  res.json({ 'message' : "All is well"
  });
});

const usersRouter = require('./user');
app.use('/user', usersRouter);

const productRouter = require('./product');
app.use('/product', productRouter);

const ordersRouter = require('./orders');
app.use('/orders', ordersRouter);

const cartRouter = require('./cart');
app.use('/cart', cartRouter);

const checkoutRouter = require('./checkout');
app.use('/checkout', checkoutRouter);

app.use((error, req, res, next) => {
  const status = error.status ? error.status : 500

  res.status(status);
  return res.send({
      name: error.name,
      message: error.message
  });
});

module.exports = {
  app
}