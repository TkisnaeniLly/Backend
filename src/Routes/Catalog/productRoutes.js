const express = require("express");
const controller = require("../../Controllers/Catalog/productController");

const router = express.Router();

router.get("/", controller.getAllProducts);
router.get("/:idOrSlug", controller.getProductDetail);
router.post("/", controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
