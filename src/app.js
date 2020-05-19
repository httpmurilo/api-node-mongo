'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();

//conexao
mongoose.connect(config.connectionString);

//model
const Product = require('./models/product');
const Custumer = require('./models/customer');
const Order = require('./models/order');

//rotas
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/products-routes');
const costumerRoute = require('./routes/customer-routes');
const orderRoute = require('./routes/order-router');


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.use('/',indexRouter);
app.use('/products',productRouter);
app.use('/costumer',costumerRoute);
app.use('/order',orderRoute);

module.exports = app;
