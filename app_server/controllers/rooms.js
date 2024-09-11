//var fs = require("fs");
//var room = JSON.parse(fs.readFileSync(".data/rooms.json", "utf8"));

const rooms = async (req, res, next) => {
  await fetch(roomsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "API lookup error";
        json = [];
      } else {
        if (!json.length) {
          message = "No rooms exist in our database";
        }
      }
      const currentPage = "rooms"; // Define currentPage variable
      res.render("rooms", {
        title: "Rooms - Travlr Getaways",
        rooms: json,
        message,
        currentPage,
      });
    })
    .catch((err) => res.status(500).send(err.message));
};
const roomsEndpoint = "http://localhost:3000/api/rooms";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

module.exports = {
  rooms,
};
