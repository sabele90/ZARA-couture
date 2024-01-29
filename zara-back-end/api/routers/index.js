const router = require("express").Router();

router.use("/clothes", require("./clothes.router.js"));

module.exports = router;
