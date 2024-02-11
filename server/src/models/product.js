// Defining your schema
const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String, // String is shorthand for {type: String}
  brand: String,
  category: String,
  price: String,
  description: String,
});

// Creating a model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
