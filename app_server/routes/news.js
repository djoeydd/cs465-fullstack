var express = require("express");
var router = express.Router();
var controller = require("../controllers/news");

/* GET travel page. */
router.get("/", function (req, res, next) {
  res.render("news", { title: "News", currentPage: "news" });
});

module.exports = router;
