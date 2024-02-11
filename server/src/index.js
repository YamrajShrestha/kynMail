const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const cors = require("cors");
const connection = require("./db/connection");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
// console.log(process.env.SECRET_KEY);

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(productRoute);
connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
