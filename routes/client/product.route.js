const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('client/pages/products/index.pug')
});
// router.post("/create", (req, res) => {
//     res.render('client/pages/products/index.pug')
// });
// router.get("/edit", (req, res) => {
//     res.render('client/pages/products/index.pug')
// });
// router.get("/delete", (req, res) => {
//     res.render('client/pages/products/index.pug')
// });

module.exports = router;