const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

//Method to set the password on this record
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

//Method to validate the password for this record
userSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
};

//Method to generate a JWT for this user
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      //Payload for the JWT
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.JWT_SECRET, //SECRET stored in .env
    { expiresIn: "1h" } //Token requires  1 hour from creation
  );
};

const user = mongoose.model("users", userSchema);
module.exports = user;
