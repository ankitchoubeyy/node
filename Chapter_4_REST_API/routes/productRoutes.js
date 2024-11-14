const express = require("express");
const {
  getAllProducts,
  getProductByID,
  addProduct,
} = require("../controllers/productsController.js");
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductByID);
router.post("/products", addProduct);
// router.delete("/product/:id", deleteProduct);

module.exports = router;
