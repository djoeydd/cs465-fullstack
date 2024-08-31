//var fs = require("fs");
//var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* Get travel view */
const travel = async (req, res, next) => {
  await fetch(tripsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      res.render("travel", { title: "Travlr Getaways", trips: json });
    })
    .catch((err) => res.status(500).send(e.message));
};

const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

module.exports = {
  travel,
};
