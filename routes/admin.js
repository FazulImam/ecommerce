const express = require("express");
const {getAddProduct, postAddProduct, getEditProduct, postEditProduct, deleteProduct} = require("../controllers/admin");

const router = express.Router();

router.route("/add-product")
  .get(getAddProduct)
  .post(postAddProduct);

router.route("/edit-product/:productId")
  .get(getEditProduct)
  .post(postEditProduct);

router.delete("/product/:productId", deleteProduct);

module.exports = router;