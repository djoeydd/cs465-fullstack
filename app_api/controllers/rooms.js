const mongoose = require("mongoose");
const Room = require("../models/travlr");
const Model = mongoose.model("rooms");

const roomsList = async (req, res) => {
  const q = await Model.find({}).exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

module.exports = {
  roomsList,
};
