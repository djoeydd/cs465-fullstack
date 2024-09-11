var express = require("express");
var router = express.Router();
var controller = require("../controllers/contact");

/* GET travel page. */
router.get("/", function (req, res, next) {
  res.render("contact", { title: "Contact", currentPage: "contact" });
});

module.exports = router;
