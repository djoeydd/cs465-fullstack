const mongoose = require("mongoose");
// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

//Define rhe room schema
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  cost: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Trip = mongoose.model("trips", tripSchema);
const Room = mongoose.model("rooms", roomSchema);
module.exports = { Trip, Room };
