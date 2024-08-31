//Bring in the DB connection and the Trip schema
const Mongoose = require("./db");
const Trip = require("./travlr");

// Read seed data from Json file
var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

// delete any existing recors, then insert seed data
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

//close the mongoose connection and exit
seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0);
});
