var express = require("express");
var router = express.Router();
const ctrlMain = require("../controllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Index", currentPage: "index" });
});

module.exports = router;
