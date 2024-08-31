const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router.route("/trips").get(tripsController.tripsList);

//GET Method routes tripsFindByCode
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;
