const express = require("express");
const controller = require("../../Controllers/Catalog/brandController");

const router = express.Router();

router.get("/", controller.getAllBrands);
router.get("/:id", controller.getBrandById);
router.post("/", controller.createBrand);
router.put("/:id", controller.updateBrand);
router.delete("/:id", controller.deleteBrand);

module.exports = router;
