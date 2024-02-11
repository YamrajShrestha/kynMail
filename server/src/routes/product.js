const express = require("express");
const router = express.Router();
const Product = require("../models/product");
router.use(express.json());
router.post("/products", async (req, res) => {
  const data = await Product.create(req.body);
  if (data) {
    res.json({ msg: "Product created successfully" });
  }
});
router.get("/products", async (req, res) => {
  const productList = await Product.find();
  if (productList) {
    res.send({ productList });
  } else {
    res.send({ msg: "something went worng" });
  }
});
router.get("/products/:id", async (req, res) => {
  const productList = await Product.findById(req.params.id);
  if (productList) {
    res.send({ productList });
  } else {
    res.send({ msg: "something went worng" });
  }
});

module.exports = router;
