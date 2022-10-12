const express = require('express');
const mongoose = require('mongoose');
const product = require('./routes/products');
const app = express();

mongoose.connect('mongodb://localhost/ecommerce').then(() => console.log('connected to Mongo DB...')).catch(err => console.log('Could not connected to Mongo DB...') );

app.use(express.json());

app.use('/products', product);

app.listen(8000, () => console.log('Server is Running...'));