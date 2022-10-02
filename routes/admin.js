const express = require("express");

const {addProduct,createProduct} = require("../controllers/admin");

const router = express.Router();

router.route("/add-product").get(addProduct).post(createProduct);

module.exports = router;