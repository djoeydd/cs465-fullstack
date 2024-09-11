var express = require("express");
var router = express.Router();
var controller = require("../controllers/meals");

/* GET travel page. */
router.get("/", function (req, res, next) {
  res.render("meals", { title: "Meals", currentPage: "meals" });
});

module.exports = router;
