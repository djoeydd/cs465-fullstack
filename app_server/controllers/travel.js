//var fs = require("fs");
//var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* Get travel view */
const travel = async (req, res, next) => {
  await fetch(tripsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "API lookup error";
        json = [];
      } else {
        if (!json.length) {
          message = "No trips exist in our database";
        }
      }
      const currentPage = "travel"; // Define currentPage variable
      res.render("travel", {
        title: "Travlr Getaways",
        trips: json,
        message,
        currentPage,
      });
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
