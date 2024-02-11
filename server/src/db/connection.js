const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/kynMaildb");
    if (conn) {
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
