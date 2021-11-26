const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", newSchema);
