const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarningSchema = new Schema({
  vendorid: {
    type: String,
    required: true,
  },
  earning: {
    type: String,
    required: true,
  },
  withdrawn: {
    type: String,
  },
  pending: {
    type: String,
  },
});

module.exports = mongoose.model("Earning", EarningSchema);
