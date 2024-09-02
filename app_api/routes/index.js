const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define the trips routes endpoint
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

//GET Method routes tripsFindByCode
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);
module.exports = router;
