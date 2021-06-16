const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const User = new Schema(
  {
    email: String,
    name: String,
    mobile :String,
    password  :String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
