const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  fcmtoken: {
    type: String,
  },
});

module.exports = mongoose.model("User", newSchema);
