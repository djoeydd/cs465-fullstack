var express = require("express");
var router = express.Router();
var controller = require("../controllers/about");

/* GET travel page. */
router.get("/", function (req, res, next) {
  res.render("about", { title: "About", currentPage: "about" });
});

module.exports = router;
