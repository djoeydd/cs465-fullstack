const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define the trips routes endpoint
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

//GET Method routes tripsFindByCode
//PUT Method routes tripsUpdateTrip
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);
module.exports = router;
