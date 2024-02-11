// Defining your schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phoneNumber: String, // String is shorthand for {type: String}
  email: String,
  password: String,
});

//Creating a model
const User = mongoose.model("User", userSchema);

module.exports = User;
