const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/product.controller")

router.get("/", controller.index);
// router.post("/create", controller.create);

// router.get("/edit", controller.edit);

// router.get("/delete", controller.delete);

module.exports = router;